import { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { Valve } from "../../components/pages/Valve";
import { InputSwitch } from "primereact/inputswitch";

type ValveData = {
  id: string;
  name: string;
  condition: "normal" | "warning";
};

function IndexDetector() {
  const [checked, setChecked] = useState(false);

  const [valves, setValves] = useState<ValveData[]>([
    { id: "1", name: "Zona 1", condition: "normal" },
    { id: "2", name: "Zona 2", condition: "normal" },
    { id: "3", name: "Zona 3", condition: "normal" },
    { id: "4", name: "Zona 4", condition: "normal" },
    { id: "5", name: "Zona 5", condition: "warning" },
    { id: "6", name: "Zona 6", condition: "normal" },
  ]);

  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    if (checked) {
      // Crear un intervalo que actualiza el contador cada segundo
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      // Limpiar el intervalo al desmontar el componente
      return () => clearInterval(interval);
    } else setSeconds(0);
  }, [checked]);

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
      <h1 className="text-[#4b5563] font-bold text-2xl">Flujo de agua</h1>
      <section className="bg-white pb-6 rounded-lg">
        {/* <article>
          <h1 className="text-[#4b5563] font-semibold text-xl mb-4">
            Sección general
          </h1>
          <div className="min-w-60 min-h-50 bg-gradient-to-r from-[#08415C] to-[#2892D7] rounded-lg p-4">
            <div className="flex flex-col gap-3">
              <h1 className="text-white font-semibold text-xl">🌐 Humedad</h1>
              <h1 className="text-white font-bold text-5xl text-center">76%</h1>
              <p className="text-white">Los sensores detectan una condición:</p>
              <Tag severity="success" value="Normal"></Tag>
            </div>
          </div>
        </article>
        <Divider layout="vertical" /> */}
        <h1 className="text-[#fff] bg-gradient-to-r from-[#08415C] to-[#2892D7] font-bold text-xl pl-4 py-2 border-solid border-1 rounded-t-lg mt-4">
          Activar/desactivar flujo para todas las zonas
        </h1>
        <div className="flex p-4">
          <div className="flex pt-2">
            <p className="text-[#4b5563] mr-2">
              {checked
                ? `Flujo encendido (${seconds} segundos transcurridos)`
                : "Flujo apagado"}
            </p>
            <InputSwitch
              checked={checked}
              onChange={(e) => setChecked(e.value)}
            />
          </div>
        </div>
      </section>
      <section className="bg-white pb-6 rounded-lg">
        <h1 className="text-[#fff] bg-gradient-to-r from-[#08415C] to-[#2892D7] font-bold text-xl pl-4 py-2 border-solid border-1 rounded-t-lg mt-4">
          Flujo de agua
        </h1>
        <div className="mt-4 grid grid-cols-3 gap-4 p-4">
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
      </section>
    </MainLayout>
  );
}

export default IndexDetector;
