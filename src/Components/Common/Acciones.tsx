import { menuAcciones } from "@/ts/menu-data";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { listadoIdiomas } from "@/utils/listadoIdiomas";
import { useIdioma } from "@/hooks/useIdioma";

export const Acciones = () => {
  const { idioma, handleSeleccionarIdioma } = useIdioma();

  const { value } = idioma;

  const handleChangeIdioma = (e: string) => {
    const busqueda = listadoIdiomas.find((item) => item.value === e);
    if (busqueda) {
      handleSeleccionarIdioma(busqueda);
    }
  };

  return (
    <div className="flex flex-row items-center gap-1">
      <Select value={value} onValueChange={handleChangeIdioma}>
        <SelectTrigger className="w-[72px]">
          <SelectValue placeholder="Idioma" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Idioma</SelectLabel>
            {listadoIdiomas.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {menuAcciones.map((item, index) => (
        <Link key={index} href={item.link}>
          <span
            className={`text-2xl transition-colors duration-200 cursor-pointer ${item.className} `}
            title={item.nombre || ""}
          >
            <item.icon />
          </span>
        </Link>
      ))}
    </div>
  );
};
