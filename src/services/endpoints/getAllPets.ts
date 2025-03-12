import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase-client";
import type { TPet } from "./model/model";
import { QueryKeys } from "./keys";
import { toaster } from "@/src/utils/toast";
import { useAuth } from "@/src/context/AuthContext";

export const getAllPets = async (ownerId: string): Promise<TPet[]> => {
  const { data, error } = await supabase
    .from("pets")
    .select("*")
    .eq("owner_id", ownerId);
  if (error) {
    toaster.error({
      title: "Error",
      message: error.message,
    });
    throw error;
  }
      return data;
};

export const useGetAllPets = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: QueryKeys.getAllPets,
    queryFn: () => getAllPets(user?.id || ""),
  });
};
