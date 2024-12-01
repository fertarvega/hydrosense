import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

interface ITableHumidity1 {
  sensors: any;
}

function TableHumidity1({ sensors }: ITableHumidity1) {
  return (
    <section className="p-4 flex flex-col gap-4">
      <h1 className="text-[#4b5563] font-bold text-xl">
        Información de los sensores de humedad
      </h1>
      <DataTable value={sensors} tableStyle={{ minWidth: "50rem" }}>
        <Column field="name" header="Nombre"></Column>
        <Column field="category" header="Categoría"></Column>
      </DataTable>
    </section>
  );
}

export default TableHumidity1;
