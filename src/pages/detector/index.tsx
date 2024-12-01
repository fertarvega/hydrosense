import { useState } from "react";
import MainLayout from "../../components/MainLayout";
import { Valve } from "../../components/pages/Valve";

type ValveData = {
  id: string;
  name: string;
  condition: "normal" | "warning";
};

function IndexDetector() {
  const [valves, setValves] = useState<ValveData[]>([
    { id: "1", name: "Zona 1", condition: "normal" },
    { id: "2", name: "Zona 2", condition: "normal" },
    { id: "3", name: "Zona 3", condition: "normal" },
    { id: "4", name: "Zona 4", condition: "normal" },
    { id: "5", name: "Zona 5", condition: "normal" },
    { id: "6", name: "Zona 6", condition: "normal" },
  ]);

  // Manejar cambio de condición
  // const handleConditionChange = (id: string) => {
  //   setValves((prevValves) =>
  //     prevValves.map((valve) =>
  //       valve.id === id
  //         ? {
  //             ...valve,
  //             condition: valve.condition === "normal" ? "warning" : "normal",
  //           }
  //         : valve
  //     )
  //   );
  // };
  return (
    <MainLayout>
      <h1 className="text-[#4b5563] font-bold text-2xl">Detector de fugas</h1>
      <div
        style={{
          display: "grid",
          flexDirection: "row",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          // justifyContent: "center",
        }}
      >
        {valves.map((valve) => (
          <Valve
            key={valve.id}
            id={valve.id}
            name={valve.name}
            condition={valve.condition}
            // onChangeCondition={handleConditionChange}
            onChangeCondition={() => console.log("onChangeCondition")}
          />
        ))}
      </div>
    </MainLayout>
  );
}

export default IndexDetector;
