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
  // Colores según la condición
  const getColor = (condition: string) => {
    switch (condition) {
      case "normal":
        return "green";
      case "warning":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div
      onClick={() => onChangeCondition(id)}
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: getColor(condition),
        border: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <div>
        <strong>{name}</strong>
        <br />
        <span>
          {condition === "normal" ? "Estatus normal" : "Se detecto una fuga"}
        </span>
      </div>
    </div>
  );
};
