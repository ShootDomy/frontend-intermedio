import { librosAPI } from "@/api/libros";
import { Libros } from "@/ts/models/libros";
import React, { useEffect, useState } from "react";
import { CardLibro } from "../Libros/CardLibro";

export const ListadoLibros = () => {
  const [libros, setLibros] = useState<Libros[]>([]);

  useEffect(() => {
    const handleObtenerLibros = async () => {
      librosAPI.obtenerLibros().then((res) => {
        console.log("Datos => ", res);
        setLibros(res);
      });
    };

    if (libros.length <= 0) {
      handleObtenerLibros();
    }
  }, [libros]);

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center h-full">
      {/* <h1 className="text-2xl font-bold text-center">Listado de libros</h1> */}
      <div className="grid grid-cols-4 gap-4">
        {libros.map((item) => (
          <CardLibro key={item.index} item={item} />
        ))}
      </div>
    </div>
  );
};
