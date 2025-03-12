import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase-client";
import type { TPet } from "./model/model";
import { QueryKeys } from "./keys";
import { toaster } from "@/src/utils/toast";

export const getPetById = async (id: string): Promise<TPet> => {
  const { data, error } = await supabase
    .from("pets")
    .select(
      `
      id,
      name,
      species,
      breed,
      age,
      image_url
    `
    )
    .eq("id", id)
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

export const useGetPetById = (id: string) => {
  return useQuery({
    queryKey: QueryKeys.getPetById(id),
    queryFn: () => getPetById(id),
    enabled: !!id,
  });
};
