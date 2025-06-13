import { CardCasas } from "@/Components/Casas/CardCasas";
import { MainLayout } from "@/Components/Layout/MainLayout";
import { useCasasListado } from "@/hooks/casas/useCasasListado";
import type { Casas } from "@/ts/models/casas";
import React from "react";

const Casas = () => {
  const { data, isLoading, isError } = useCasasListado();

  if (isLoading)
    return (
      <MainLayout>
        <div className="h-full w-full flex items-center justify-center">
          <span className="text-2xl">Cargando...</span>
        </div>
      </MainLayout>
    );

  if (isError) return <div>Error</div>;

  if (!data) return <div>No existen registros para mostrar</div>;

  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full items-center justify-center h-full">
        <div className="grid grid-cols-4 gap-4">
          {data.map((item) => (
            <CardCasas key={item.index} item={item} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Casas;
