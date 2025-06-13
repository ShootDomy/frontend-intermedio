import { Hechizos } from "@/ts/models/hechizos";
import { get } from "./config";

export const hechizosAPI = {
  obtenerHechizos: async () => {
    const res = await get<Hechizos[]>(`/spells`);
    return res.data;
  },
};
