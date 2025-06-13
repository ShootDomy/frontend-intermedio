import { Personajes } from "@/ts/models/personajes";
import { get } from "./config";

export const personajesAPI = {
  obtenerPersonajes: async () => {
    const res = await get<Personajes[]>("/characters");
    return res.data;
  },
};
