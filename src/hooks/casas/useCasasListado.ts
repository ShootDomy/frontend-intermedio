import { casasAPI } from "@/api/casas";
import { useQuery } from "@tanstack/react-query";

export const useCasasListado = () => {
  return useQuery({
    queryKey: ["casa", "listado"],
    queryFn: async () => {
      return await casasAPI.obtenerCasas();
    },
  });
};
