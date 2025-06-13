import { hechizosAPI } from "@/api/hechizos";
import { useQuery } from "@tanstack/react-query";

export const useHechizosListado = () => {
  return useQuery({
    queryKey: ["hechizos", "listado"],
    queryFn: async () => {
      return await hechizosAPI.obtenerHechizos();
    },
  });
};
