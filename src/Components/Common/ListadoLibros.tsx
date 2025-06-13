import { librosAPI } from "@/api/libros";
import { ILibros } from "@/ts/models/ILibros";
import React, { useEffect, useState } from "react";
import { CardLibro } from "../Libros/CardLibro";
import { cn } from "@/utils/cn";

export const ListadoLibros = () => {
  const [libros, setLibros] = useState<ILibros[]>([]);

  useEffect(() => {
    const handleObtenerLibros = async () => {
      librosAPI.obtenerLibros({ max: 3 }).then((res) => {
        console.log("Datos => ", res);
        setLibros(res);
      });
    };

    if (libros.length <= 0) {
      handleObtenerLibros();
    }
  }, [libros]);

  return (
    // <div className="flex flex-col gap-4 w-full items-center justify-center h-full">
    //   {/* <h1 className="text-2xl font-bold text-center">Listado de libros</h1> */}
    //   <div className="grid grid-cols-4 gap-4">
    //     {libros.map((item) => (
    //       <CardLibro key={item.index} item={item} />
    //     ))}
    //   </div>
    // </div>

    <div className="flex flex-row gap-2 h-full w-full">
      {libros.map((item, idx) => (
        <div
          key={item.index}
          className={cn(
            "basis-1/4 h-full flex items-center",
            idx === 1 && "basis-2/4"
          )}
        >
          <CardLibro
            item={item}
            classNameCard="min-h-7/8"
            classNameDetalles="flex flex-col gap-2 text-center"
          />
        </div>
      ))}
    </div>
  );
};
