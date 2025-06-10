import Image from "next/image";
import React from "react";

export const Branding = () => {
  return (
    <div className="flex items-center gap-2 text-black dark:text-white">
      <Image
        alt="logo"
        src="/images/gatito.webp"
        width={100}
        height={100}
        className="w-10 h-10 rounded-full object-contain"
      />
      <span>Libreria Domy</span>
    </div>
  );
};
