// src/components/Valve.tsx
import React from "react";

type ValveProps = {
  id: string;
  name: string;
  condition: "normal" | "warning"; // Puedes expandir con más estados
  onChangeCondition: (id: string) => void;
};

export const Valve: React.FC<ValveProps> = ({
  id,
  name,
  condition,
  onChangeCondition,
}) => {
  const getColor = (condition: string) => {
    switch (condition) {
      case "normal":
        return "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(54,140,42,1) 0%, rgba(0,255,25,1) 100%)";
      case "warning":
        return "#d72f1f";
      default:
        return "#6DAEDB";
    }
  };

  return (
    <>
      {condition === "normal" ? (
        <div
          onClick={() => onChangeCondition(id)}
          className={`flex flex-row gap-2 p-4 bg-gradient-to-r from-[#368c2a] to-[#19b100]  rounded-md cursor-pointer text-white w-full h-64`}
        >
          <div>
            <p className="text-center text-2xl border-solid border-b-2 border-white">
              <strong>{name}</strong>
            </p>
            <p className="mt-2">
              <span>Estatus normal</span>
            </p>
            <p>
              Coordenadas: <span>19.4326° N, 99.1332° W</span>
            </p>
            <p>
              Plantación: <span>🍅 Tomate</span>
            </p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => onChangeCondition(id)}
          className={`flex flex-row gap-2 p-4 bg-gradient-to-r from-[#b10000] to-[#ff1c1c]  rounded-md cursor-pointer text-white w-full h-64`}
        >
          <div>
            <p className="text-center text-2xl border-solid border-b-2 border-white">
              <strong>{name}</strong>
            </p>
            <p className="mt-2">
              <span>Se detecto una fuga</span>
            </p>
            <p>
              Coordenadas: <span>19.4326° N, 99.1332° W</span>
            </p>
            <p>
              Plantación: <span>🍅 Tomate</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
