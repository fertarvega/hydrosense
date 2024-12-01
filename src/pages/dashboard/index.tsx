import { Card } from "primereact/card";
import MainLayout from "../../components/MainLayout";
import TableHumidity1 from "../../components/pages/TableHumidity1";
import { Tag } from "primereact/tag";
import TableHumidity2 from "../../components/pages/TableHumidity2";
import axios from "axios";
import { useEffect, useState } from "react";
import { IDeviceClient, IStatisticClient } from "../../interfaces/api";
import { Dropdown } from "primereact/dropdown";

function IndexDashboard() {
  const sensors = [{ name: "Testing 1", category: "normal" }];
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedRequest, setSelectedRequest] = useState("NY");
  const plantsOptions = [
    { name: "Tomate", code: "NY" },
  ];

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
      <h1 className="text-[#4b5563] font-bold text-2xl">Tablero de humedad</h1>
      <section className="flex flex-row gap-4 py-4">
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
        <section className="min-w-60 min-h-50 bg-gradient-to-r from-[#08415C] to-[#2892D7] rounded-lg p-4">
          <article className="flex flex-col gap-3">
            <h1 className="text-white font-semibold text-xl">
              🌐 Humedad general
            </h1>
            <h1 className="text-white font-bold text-5xl text-center">32°</h1>
            <p className="text-white">Los sensores detectan una condición:</p>
            <Tag severity="success" value="Normal"></Tag>
          </article>
        </section>
        <section className="min-w-60 min-h-50 bg-gradient-to-r from-[#08415C] to-[#2892D7] rounded-lg p-4">
          <article className="flex flex-col gap-3">
            <h1 className="text-white font-semibold text-xl">
              🍅 Humedad - Plantas de tomate
            </h1>
            <h1 className="text-white font-bold text-5xl text-center">15°</h1>
            <p className="text-white">Los sensores detectan una condición:</p>
            <Tag severity="danger" value="Peligrosa"></Tag>
          </article>
        </section>
      </section>
      <TableHumidity1 sensors={sensors} />
      <TableHumidity2 sensors={sensors} />
    </MainLayout>
  );
}

export default IndexDashboard;
