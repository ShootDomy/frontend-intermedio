import { ILibros } from "@/ts/models/ILibros";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

interface CardLibroProps {
  item: ILibros;
  classNameCard?: string;
  classNameDetalles?: string;
}

export const CardLibro: React.FC<CardLibroProps> = ({
  item,
  classNameCard,
  classNameDetalles,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center border border-gray-300 rounded-md p-4 gap-4",
        classNameCard
      )}
    >
      <h2 className="text-center">{item.title}</h2>
      <div
        className={cn(
          "flex flex-row items-center justify-between gap-4",
          classNameDetalles
        )}
      >
        <Image
          src={item.cover}
          alt={item.originalTitle}
          width={100}
          height={100}
          objectFit="contain"
        />
        <div className="flex flex-col">
          <p className="text-xs  text-balance ">{item.description}</p>
          <span>{item.releaseDate}</span>
        </div>
      </div>
    </div>
  );
};
