import { ILibros, LibrosParams } from "@/ts/models/ILibros";
import { BASE_URL, LENGUAJE } from "@/utils/constans";

export const librosAPI = {
  obtenerLibros: async (params: LibrosParams) => {
    try {
      const url = new URL(`${BASE_URL}${LENGUAJE}/books`);

      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          url.searchParams.append(key, String(value));
        }
      });

      const res = await fetch(url.href).then(async (res) => {
        return (await res.json()) as ILibros[];
      });
      return res;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};
