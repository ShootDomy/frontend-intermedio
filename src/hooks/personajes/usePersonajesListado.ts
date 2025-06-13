import { personajesAPI } from "@/api/personajes";
import { useQuery } from "@tanstack/react-query";

export const usePersonajesListado = () => {
  return useQuery({
    queryKey: ["personajes", "listado"],
    queryFn: async () => {
      return await personajesAPI.obtenerPersonajes();
    },
  });
};
