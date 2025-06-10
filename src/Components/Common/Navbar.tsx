import React from "react";
import { Branding } from "./Branding";
import { Menu } from "./Menu";
import { Acciones } from "./Acciones";

export const Navbar = () => {
  return (
    <div className="h-12 flex flex-row items-center justify-between px-2">
      <Branding />
      <Menu />
      <Acciones />
    </div>
  );
};
