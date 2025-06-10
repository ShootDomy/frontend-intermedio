import React from "react";
import { Branding } from "./Branding";
import { Menu } from "./Menu";

export const Navbar = () => {
  return (
    <div className="h-12 flex flex-row items-center justify-between px-2">
      <Branding />
      <Menu />
      <div>acciones</div>
    </div>
  );
};
