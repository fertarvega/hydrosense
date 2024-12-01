import { Dropdown } from "primereact/dropdown";
import MainLayout from "../../components/MainLayout";
import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Chip } from "primereact/chip";

function IndexConfiguration() {
  const [selectedValue, setSelectedValue] = useState("15");
  const options = [{ name: "15 minutos", code: "15" }];

  const rowClick = false;
  const [selectedProducts, setSelectedProducts] = useState<any>([]);
  const products = [
    {
      code: "0001",
      name: "Sensor de humedad",
      status: true,
      details: 10,
    },
    {
      code: "0002",
      name: "Sensor de temperatura",
      status: true,
      details: 10,
    },
    {
      code: "0003",
      name: "Sensor de luz",
      status: false,
      details: 10,
    },
  ];

  const handleCheckbox = (value: string) => {
    const aux = [...selectedProducts];
    aux.push(value);
    setSelectedProducts(aux);
  };

  const detailsBody = (rowData?: any, column?: string) => {
    return (
      <Button icon="pi pi-eye" rounded aria-label="Filter" severity="help" />
    );
  };

  const statusBody = (rowData?: any, column?: string) => {
    if(rowData.status) return <Chip label="🟢 Activo" />
    return <Chip label="🔴 Desactivado" />
  };

  return (
    <MainLayout>
      <h1 className="text-[#4b5563] font-bold text-2xl">Configuración</h1>
      <section className="bg-white p-6 mt-4 w-full rounded-lg">
        <article className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-4">
          <div>
            <p className="mb-2 text-[#4b5563]">
              Intervalo de chequeos de humedad
            </p>
            <Dropdown
              value={selectedValue}
              optionValue="code"
              onChange={(e) => setSelectedValue(e.value)}
              options={options}
              optionLabel="name"
              placeholder=""
              className="w-full"
            />
          </div>
        </article>
        <article className="flex">
          <Button label="Guardar" severity="success" className="mt-4 ml-auto" />
        </article>
      </section>
      <section className="mt-4">
        <h1 className="text-[#fff] bg-gradient-to-r from-[#08415C] to-[#2892D7] font-bold text-xl pl-4 py-2 border-solid border-1 rounded-t-lg">
          Plantas registradas en el sistema
        </h1>
        <article className="bg-white p-6 w-full rounded-b-lg">
          <Chip label="🍅 Tomate" />
          <div className="flex">
            <Button
              label="Registrar nuevas plantas"
              severity="warning"
              className="mt-4 ml-auto"
            />
          </div>
        </article>
      </section>
      <section className="mt-4">
        <h1 className="text-[#fff] bg-gradient-to-r from-[#08415C] to-[#2892D7] font-bold text-xl pl-4 py-2 border-solid border-1 rounded-t-lg">
          Modulos del sistema
        </h1>
        <article className="bg-white p-6 w-full rounded-b-lg">
          <DataTable
            value={products}
            selection={selectedProducts}
            selectionMode={rowClick ? null : "checkbox"}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="code"
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
            ></Column>
            <Column field="name" header="Módulo"></Column>
            <Column
              field="category"
              header="Estatus en el sistema"
              body={statusBody}
            ></Column>
            <Column
              field="details"
              header="Detalles"
              body={detailsBody}
            ></Column>
          </DataTable>
          <div className="flex">
            <Button
              label="Solicitar modulos"
              severity="warning"
              className="mt-4 ml-auto"
            />
          </div>
        </article>
      </section>
    </MainLayout>
  );
}

export default IndexConfiguration;
