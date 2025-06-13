import { Casas } from "@/ts/models/casas";
import { get } from "./config";

export const casasAPI = {
  obtenerCasas: async () => {
    const res = await get<Casas[]>("/houses");
    return res.data;
  },
};
