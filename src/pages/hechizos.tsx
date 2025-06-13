import { hechizosAPI } from "@/api/hechizos";
import { CardHechizo } from "@/Components/Hechizos/CardHechizo";
import type { Hechizos } from "@/ts/models/hechizos";
import React, { useEffect, useState } from "react";

const Hechizos = () => {
  const [hechizos, sethechizos] = useState<Hechizos[]>([]);

  useEffect(() => {
    const handleObtenerPersonaje = async () => {
      hechizosAPI.obtenerHechizos().then((res) => {
        console.log("Datos => ", res);
        sethechizos(res);
      });
    };

    if (hechizos.length <= 0) {
      handleObtenerPersonaje();
    }
  }, [hechizos]);

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center h-full">
      <div className="grid grid-cols-4 gap-4">
        {hechizos.map((item) => (
          <CardHechizo key={item.index} />
        ))}
      </div>
    </div>
  );
};

export default Hechizos;
