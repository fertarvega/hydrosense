import { Card } from "primereact/card";
import MainLayout from "../../components/MainLayout";
import TableHumidity1 from "../../components/pages/TableHumidity1";
import { Tag } from "primereact/tag";
import TableHumidity2 from "../../components/pages/TableHumidity2";
import axios from "axios";
import { useEffect, useState } from "react";
import { IDeviceClient, IStatisticClient } from "../../interfaces/api";

function IndexDashboard() {
  const sensors = [{ name: "Testing 1", category: "normal" }];
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getAllDevices = async () => {
    try {
      const response = await axios.get<IDeviceClient>(
        "http://192.168.100.32:8080/api/v1/devices"
      );
      console.log(response);

      setLoading(false);
    } catch (err) {
      setError("Failed to fetch posts.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllDevices();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-[#4b5563] font-bold text-2xl">Tablero</h1>
      <section className="flex flex-row gap-4 py-4">
        <Card
          title="Temperatura general"
          subTitle="Todos los sensores"
          style={{ width: "fit-content" }}
        >
          <h1 className="mx-0 my-2 p-0 font-bold">{}</h1>
          <Tag severity="success" value="Estatus normal"></Tag>
        </Card>
        <Card
          title="Temperatura general"
          subTitle="Todos los sensores"
          style={{ width: "fit-content" }}
        >
          <h1 className="m-0 p-0 font-bold">16°</h1>
        </Card>
      </section>
      <section className="bg-white my-4">
        <TableHumidity1 sensors={sensors} />
      </section>
      <section className="bg-white my-8">
        <TableHumidity2 sensors={sensors} />
      </section>
    </MainLayout>
  );
}

export default IndexDashboard;
