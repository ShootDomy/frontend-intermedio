import { MainLayout } from "@/Components/Layout/MainLayout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { useHechizosListado } from "@/hooks/hechizos/useHechizosListado";
import type { Hechizos } from "@/ts/models/hechizos";
import React from "react";

const Hechizos = () => {
  const { data, isLoading, isError } = useHechizosListado();

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
        <div className="h-full   gap-4">
          <Table>
            <TableCaption>A list of your recent data.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Index</TableHead>
                <TableHead>Hechizo</TableHead>
                <TableHead>Uso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.index}>
                  <TableCell>{item.index}</TableCell>
                  <TableCell className="font-medium">{item.spell}</TableCell>
                  <TableCell>{item.use}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Hechizos;
