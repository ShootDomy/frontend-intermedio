import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FaBook, FaUserTie } from "react-icons/fa6";

export const menuData: IMenuData[] = [
  { nombre: "Principal", link: "/", icon: FaHome },
  { nombre: "Libros", link: "/libros", icon: FaBook },
  { nombre: "Nosotros", link: "/nosotros", icon: FaUserTie },
];

export type IMenuData = {
  nombre: string;
  link: string;
  icon: IconType;
};
