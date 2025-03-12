import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase-client";
import type { TVetVisitLog } from "./model/model";
import { QueryKeys } from "./keys";
import { toaster } from "@/src/utils/toast";

export const getVetVisitLogs = async (
  petId: string
): Promise<TVetVisitLog[]> => {
  const { data, error } = await supabase
    .from("vet_visit_logs")
    .select(
      `
      id,
      pet_id,
      notes,
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

export const useGetVetVisitLogs = (petId: string) => {
  return useQuery({
    queryKey: QueryKeys.getVetVisitLogs(petId),
    queryFn: () => getVetVisitLogs(petId),
    enabled: !!petId,
  });
};
