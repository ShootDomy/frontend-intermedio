import { MainLayout } from "@/Components/Layout/MainLayout";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { usePersonajesListado } from "@/hooks/personajes/usePersonajesListado";
import React from "react";
import Image from "next/image";

const Personajes = () => {
  const { data, isLoading, isError } = usePersonajesListado();

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
      {/* <div>
        {data.map((item) => (
          <CardPersonaje key={item.index} item={item} />
        ))}
      </div> */}

      <div className="flex flex-row gap-4 w-full items-center justify-center h-full">
        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-6xl"
          >
            <CarouselContent>
              {data.map((item) => (
                <CarouselItem
                  key={item.index}
                  className="md:basis-1/2 lg:basis-1/3 hover:cursor-default"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6 pointer-events-none">
                        <strong className="text-3xl font-semibold text-center">
                          {item.fullName}
                        </strong>
                        <div className="flex flex-row items-center justify-center gap-2 p-3">
                          <Image
                            src={item.image}
                            alt={item.fullName}
                            width={100}
                            height={100}
                            objectFit="contain"
                          />

                          <div className="flex flex-col">
                            <p>{item.nickname}</p>
                            <p>{item.hogwartsHouse}</p>
                            <p>{item.interpretedBy}</p>
                            <p>{item.birthdate}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </MainLayout>
  );
};

export default Personajes;
