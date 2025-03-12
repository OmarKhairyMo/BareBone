import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase-client";
import type { TWeightLog } from "./model/model";
import { QueryKeys } from "./keys";
import { toaster } from "@/src/utils/toast";

export const getWeightLogs = async (petId: string): Promise<TWeightLog[]> => {
  const { data, error } = await supabase
    .from("weight_logs")
    .select(
      `
      id,
      pet_id,
      weight,
      date
    `
    )
    .eq("pet_id", petId)
    .order("date", { ascending: false });
    if (error) {
      toaster.error({
        title: "Error",
        message: error.message,
      });
      throw error;
    }

  return data;
};

export const useGetWeightLogs = (petId: string) => {
  return useQuery({
    queryKey: QueryKeys.getWeightLogs(petId),
    queryFn: () => getWeightLogs(petId),
    enabled: !!petId,
  });
};
