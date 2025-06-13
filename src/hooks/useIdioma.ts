import { IdiomaType } from "@/utils/listadoIdiomas";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useIdioma = () => {
  const [idioma, setIdioma] = useState<IdiomaType>({
    label: "ES",
    value: "es",
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const handleObtenerIdioma = async () => {
      const idioma = await localStorage.getItem("idioma");
      if (idioma) {
        setIdioma(JSON.parse(idioma));
      }
    };

    handleObtenerIdioma();
  }, []);

  const handleSeleccionarIdioma = async (idioma: IdiomaType) => {
    await localStorage.setItem("idioma", JSON.stringify(idioma));
    setIdioma(idioma);
    // window.location.reload();
    queryClient
      .invalidateQueries
      //   {
      //   queryKey: ["casa", "listado"],
      // }
      ();
  };

  return {
    idioma,
    handleSeleccionarIdioma,
  };
};
