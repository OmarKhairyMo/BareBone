import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase-client";
import type { TWeightLog } from "./model/model";
import { QueryKeys } from "./keys";
import { toaster } from "@/src/utils/toast";

type AddWeightLogInput = Omit<TWeightLog, "id">;

export const addWeightLog = async (
  input: AddWeightLogInput
): Promise<TWeightLog> => {
  const { data, error } = await supabase
    .from("weight_logs")
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

export const useAddWeightLog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addWeightLog,
    onSuccess: (data) => {
      toaster.success({
        title: "Success",
        message: "Weight log added successfully",
      });
      queryClient.invalidateQueries({
        queryKey: QueryKeys.getWeightLogs(data.pet_id),
      });
    },
  });
};
