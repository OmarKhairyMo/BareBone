import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase-client";
import type { TBodyConditionLog } from "./model/model";
import { QueryKeys } from "./keys";
import { toaster } from "@/src/utils/toast";

export const getBodyConditionLogs = async (
  petId: string
): Promise<TBodyConditionLog[]> => {
  const { data, error } = await supabase
    .from("body_condition_logs")
    .select(
      `
      id,
      pet_id,
      body_condition,
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

export const useGetBodyConditionLogs = (petId: string) => {
  return useQuery({
    queryKey: QueryKeys.getBodyConditionLogs(petId),
    queryFn: () => getBodyConditionLogs(petId),
    enabled: !!petId,
  });
};
