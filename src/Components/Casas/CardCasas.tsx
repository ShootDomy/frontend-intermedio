import { Casas } from "@/ts/models/casas";
import React from "react";
// import styled from "styled-components";

interface CardCasasProps {
  item: Casas;
}

export const CardCasas: React.FC<CardCasasProps> = ({ item }) => {
  const classMap = {
    red: "bg-red-400",
    gold: "bg-yellow-300",
    yellow: "bg-yellow-400",
    black: "bg-black",
    blue: "bg-blue-400",
    green: "bg-green-400",
    silver: "bg-gray-400",
  };

  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <span>{item.emoji}</span>
            <strong>{item.house}</strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div
              className={`circle ${
                classMap[item.colors[1] as keyof typeof classMap]
              }`}
            ></div>
            {/* <div className="circle" id="right"></div> */}
            <div
              className={`circle ${
                classMap[item.colors[0] as keyof typeof classMap]
              }`}
              id="bottom"
            ></div>
          </div>
          <div className="front-content">
            <small className="badge">{item.house}</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{item.founder}</strong>
                </p>
              </div>
              <p className="card-footer">
                {item.animal} &nbsp; | &nbsp; 1 Serving
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
