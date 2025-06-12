import { Hechizos } from "@/ts/models/hechizos";
import { BASE_URL, LENGUAJE } from "@/utils/constans";

export const hechizosAPI = {
  obtenerHechizos: async () => {
    try {
      const res = await fetch(`${BASE_URL}${LENGUAJE}/spells`).then(
        async (res) => {
          return (await res.json()) as Hechizos[];
        }
      );
      return res;
    } catch (error) {
      console.error("Error fetching hechizos:", error);
      return [];
    }
  },
};
