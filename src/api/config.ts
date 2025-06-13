import { BASE_URL, LENGUAJE } from "@/utils/constans";
import axios from "axios";

const _axios = axios.create({
  baseURL: `${BASE_URL}${LENGUAJE}`,
  timeout: 2 * 60 * 1000,
});

_axios.interceptors.request.use(async (config) => {
  const idioma = await localStorage.getItem("idioma");
  if (idioma) {
    const tmp = JSON.parse(idioma);
    config.baseURL = `${BASE_URL}/${tmp.value}`;
  }

  return config;
});

const { get, post, put, delete: destroy } = _axios;

export { get, post, put, destroy };
