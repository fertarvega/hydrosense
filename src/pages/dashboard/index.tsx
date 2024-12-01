import { Card } from "primereact/card";
import MainLayout from "../../components/MainLayout";
import TableHumidity1 from "../../components/pages/TableHumidity1";
import { Tag } from "primereact/tag";
import TableHumidity2 from "../../components/pages/TableHumidity2";
import axios from "axios";
import { useEffect, useState } from "react";
import { IDeviceClient, IStatisticClient } from "../../interfaces/api";
import { Dropdown } from "primereact/dropdown";
import { Divider } from "primereact/divider";
import jsonSensorData from "../../sensors_data.json";

function IndexDashboard() {
  const sensors = [{ name: "Testing 1", category: "normal" }];
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedRequest, setSelectedRequest] = useState("NY");
  const plantsOptions = [{ name: "Tomate", code: "NY" }];

  function formatDateTime(isoDate: Date) {
    const date = new Date(isoDate);

    // Extraer las partes de la fecha
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Los meses van de 0 a 11
    const year = date.getFullYear();

    // Extraer las partes de la hora
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // La hora "0" debe mostrarse como "12"

    return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
  }

  // Ejemplo de uso
  const isoDate = "2024-12-01T11:45:00Z";
  jsonSensorData.sensorData.map((item) => {
    item.lastUpdate = formatDateTime(item.lastUpdate);

    return item.lastUpdate;
  }); // Salida: "01/12/2024 11:45 AM"

  // const getAllDevices = async () => {
  //   try {
  //     const response = await axios.get<IDeviceClient>(
  //       "http://192.168.100.32:8080/api/v1/devices"
  //     );
  //     console.log(response);

  //     setLoading(false);
  //   } catch (err) {
  //     setError("Failed to fetch posts.");
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getAllDevices();
  // }, []);

  return (
    <MainLayout>
      {/* <h1 className="text-[#4b5563] font-bold text-2xl">Tablero general</h1> */}
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
        <h1 className="text-[#fff] bg-gradient-to-r from-[#08415C] to-[#2892D7] font-bold text-xl pl-4 py-2 border-solid border-1 rounded-t-lg">
          Información de los sensores de humedad
        </h1>
        <div className="flex p-4">
          <article className="mr-4">
            <h1 className="text-[#4b5563] font-semibold text-xl mb-4">
              Selección específica
            </h1>
            <div className="w-80">
              <p className="my-2 text-[#4b5563]">Tipo de planta</p>
              <Dropdown
                value={selectedRequest}
                optionValue="code"
                onChange={(e) => setSelectedRequest(e.value)}
                options={plantsOptions}
                optionLabel="name"
                placeholder=""
                className="w-full"
              />
            </div>
          </article>
          <article className="min-w-60 min-h-50 bg-gradient-to-r from-[#08415C] to-[#2892D7] rounded-lg p-4">
            <div className="flex flex-col gap-3">
              <h1 className="text-white font-semibold text-xl">
                🍅 Humedad - Plantación de tomate
              </h1>
              <h1 className="text-white font-bold text-5xl text-center">76%</h1>
              <p className="text-white">Los sensores detectan una condición:</p>
              <Tag severity="success" value="Normal"></Tag>
              {/* <Tag severity="danger" value="Peligrosa"></Tag> */}
            </div>
          </article>
        </div>
      </section>
      <TableHumidity1 sensors={jsonSensorData.sensorData} />
      {/* <TableHumidity2 sensors={sensors} /> */}
    </MainLayout>
  );
}

export default IndexDashboard;
