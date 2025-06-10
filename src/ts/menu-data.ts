import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import {
  FaBook,
  FaLinkedin,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareYoutube,
  FaUserTie,
} from "react-icons/fa6";

export const menuData: IMenuData[] = [
  { nombre: "Principal", link: "/", icon: FaHome },
  { nombre: "Libros", link: "/libros", icon: FaBook },
  { nombre: "Nosotros", link: "/nosotros", icon: FaUserTie },
];

export type IMenuData = {
  nombre: string;
  link: string;
  icon: IconType;
  className?: string;
};

export const menuAcciones: IMenuData[] = [
  {
    nombre: "linkedin",
    link: "https://www.linkedin.com/in/domenica-vintimilla-24a735245/",
    icon: FaLinkedin,
    className: "hover:text-blue-600",
  },
  {
    nombre: "github",
    link: "https://github.com/ShootDomy",
    icon: FaSquareGithub,
    className: "hover:text-violet-600",
  },
  {
    nombre: "instagram",
    link: "https://www.instagram.com/p/C5uSiHeNWy2/?igsh=YnRsbjI0aGs5cGZs",
    icon: FaSquareInstagram,
    className: "hover:text-pink-400",
  },
  {
    nombre: "youtube",
    link: "https://www.youtube.com/watch?v=Fb4zTP_N8sk&ab_channel=JPBG15XD",
    icon: FaSquareYoutube,
    className: "hover:text-red-800",
  },
];
