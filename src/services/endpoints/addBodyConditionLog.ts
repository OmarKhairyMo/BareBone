import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase-client";
import type { TBodyConditionLog } from "./model/model";
import { QueryKeys } from "./keys";
import { toaster } from "@/src/utils/toast";

type AddBodyConditionLogInput = Omit<TBodyConditionLog, "id">;

export const addBodyConditionLog = async (
  input: AddBodyConditionLogInput
): Promise<TBodyConditionLog> => {
  const { data, error } = await supabase
    .from("body_condition_logs")
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

export const useAddBodyConditionLog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addBodyConditionLog,
    onSuccess: (data) => {
      toaster.success({
        title: "Success",
        message: "Body condition log added successfully",
      });
      queryClient.invalidateQueries({
        queryKey: QueryKeys.getBodyConditionLogs(data.pet_id),
      });
    },
  });
};
