import { librosAPI } from "@/api/libros";
import { MainLayout } from "@/Components/Layout/MainLayout";
import { CardLibro } from "@/Components/Libros/CardLibro";
import type { ILibros } from "@/ts/models/ILibros";
import React, { useEffect, useState } from "react";

const Libros = () => {
  const [libros, setLibros] = useState<ILibros[]>([]);

  useEffect(() => {
    const handleObtenerLibros = async () => {
      librosAPI.obtenerLibros({}).then((res) => {
        console.log("Datos => ", res);
        setLibros(res);
      });
    };

    if (libros.length <= 0) {
      handleObtenerLibros();
    }
  }, [libros]);

  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full items-center justify-center h-full ">
        {/* <h1 className="text-2xl font-bold text-center">Listado de libros</h1> */}
        <div className="h-full grid grid-cols-2 gap-4">
          {libros.map((item) => (
            <CardLibro key={item.index} item={item} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Libros;
