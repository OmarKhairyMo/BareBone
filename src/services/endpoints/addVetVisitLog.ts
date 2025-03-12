import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase-client";
import type { TVetVisitLog } from "./model/model";
import { QueryKeys } from "./keys";
import { toaster } from "@/src/utils/toast";

type AddVetVisitLogInput = Omit<TVetVisitLog, "id">;

export const addVetVisitLog = async (
  input: AddVetVisitLogInput
): Promise<TVetVisitLog> => {
  const { data, error } = await supabase
    .from("vet_visit_logs")
    .insert(input)
    .select()
    .single();

    if (error) {
      toaster.error({
        title: "Error",
        message: error.message,
      });
      throw error;
    }
  

  return data;
};

export const useAddVetVisitLog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addVetVisitLog,
    onSuccess: (data) => {
      toaster.success({
        title: "Success",
        message: "Vet visit log added successfully",
      });
      queryClient.invalidateQueries({
        queryKey: QueryKeys.getVetVisitLogs(data.pet_id),
      });
    },
  });
};
