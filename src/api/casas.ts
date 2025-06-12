import { Casas } from "@/ts/models/casas";
import { BASE_URL, LENGUAJE } from "@/utils/constans";

export const casasAPI = {
  obtenerCasas: async () => {
    try {
      const res = await fetch(`${BASE_URL}${LENGUAJE}/houses`).then(
        async (res) => {
          return (await res.json()) as Casas[];
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};
