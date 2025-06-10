import { menuAcciones } from "@/ts/menu-data";
import Link from "next/link";
import React from "react";

export const Acciones = () => {
  return (
    <div className="flex flex-row items-center gap-4">
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
