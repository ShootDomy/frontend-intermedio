import { Libros } from "@/ts/models/libros";
import { BASE_URL, LENGUAJE } from "@/utils/constans";

export const librosAPI = {
  obtenerLibros: async () => {
    try {
      const res = await fetch(`${BASE_URL}${LENGUAJE}/books`).then(
        async (res) => {
          return (await res.json()) as Libros[];
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};
