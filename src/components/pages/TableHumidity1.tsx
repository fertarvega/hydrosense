import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

interface ITableHumidity1 {
  sensors: any;
}

function TableHumidity1({ sensors }: ITableHumidity1) {
  return (
    <section className="bg-white my-4 border-solid border-1 rounded-b-lg">
      <h1 className="text-[#fff] bg-gradient-to-r from-[#08415C] to-[#2892D7] font-bold text-xl pl-4 py-2 border-solid border-1 rounded-t-lg">
        Información de los sensores de humedad
      </h1>
      <article className="p-4 flex flex-col gap-4">
        <DataTable value={sensors} tableStyle={{ minWidth: "50rem" }}>
          <Column field="location" header="Nombre"></Column>
          <Column field="humidityLevel" header="Nivel de humedad"></Column>
          <Column field="status" header="Estatus"></Column>
          <Column field="lastUpdate" header="Hora del registro"></Column>
        </DataTable>
      </article>
    </section>
  );
}

export default TableHumidity1;
