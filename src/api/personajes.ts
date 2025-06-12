import { Personajes } from "@/ts/models/personajes";
import { BASE_URL, LENGUAJE } from "@/utils/constans";

export const personajesAPI = {
  obtenerPersonajes: async () => {
    try {
      const res = await fetch(`${BASE_URL}${LENGUAJE}/characters`).then(
        async (res) => {
          return (await res.json()) as Personajes[];
        }
      );
      return res;
    } catch (error) {
      console.error("Error fetching personajes:", error);
      return [];
    }
  },
};
