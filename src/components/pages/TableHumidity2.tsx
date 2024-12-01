import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import { useState } from "react";

interface ITableHumidity2 {
  sensors: any;
}

function TableHumidity2({ sensors }: ITableHumidity2) {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const requestsOptions = [
    { name: "Cantidad de agua utilizada", code: "NY" },
    { name: "Fugas detectadas", code: "RM" },
  ];

  const [periodSelected, setPeriodSelected] = useState(null);
  const periodOptions = [
    { name: "1 día", code: "NY" },
    { name: "7 días", code: "RM" },
    { name: "30 días", code: "RM" },
    { name: "180 días", code: "RM" },
    { name: "365 días", code: "RM" },
  ];

  return (
    <section className="p-4 flex flex-col gap-4">
      <h1 className="text-[#4b5563] font-bold text-xl">
        Información sobre el agua
      </h1>
      <article className="flex gap-4">
        <div className="w-80">
          <p className="my-2 text-[#4b5563]">Tipo de solicitud</p>
          <Dropdown
            value={selectedRequest}
            onChange={(e) => setSelectedRequest(e.value)}
            options={requestsOptions}
            optionLabel="name"
            placeholder=""
            className="w-full"
          />
        </div>
        <div className="w-80">
          <p className="my-2 text-[#4b5563]">Periodo</p>
          <Dropdown
            value={periodSelected}
            onChange={(e) => setPeriodSelected(e.value)}
            options={periodOptions}
            optionLabel="name"
            placeholder=""
            className="w-full"
          />
        </div>
      </article>

      <DataTable value={sensors} tableStyle={{ minWidth: "50rem" }}>
        <Column field="name" header="Nombre"></Column>
        <Column field="category" header="Categoría"></Column>
      </DataTable>
    </section>
  );
}

export default TableHumidity2;
