import { Dropdown } from "primereact/dropdown";
import MainLayout from "../../components/MainLayout";
import { useState } from "react";
import { Button } from "primereact/button";

function IndexConfiguration() {
  const [selectedValue, setSelectedValue] = useState("15");
  const options = [{ name: "15 minutos", code: "15" }];

  // Intervalo de monitorio
  //
  return (
    <MainLayout>
      <h1 className="text-[#4b5563] font-bold text-2xl">Configuración</h1>
      <section className="bg-white p-6 mt-4 w-full">
        <article className=" grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-4">
          <div>
            <p className="mb-2 text-[#4b5563]">Tipo de solicitud</p>
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
          <div>
            <p className="mb-2 text-[#4b5563]">Tipo de solicitud</p>
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
          <div>
            <p className="mb-2 text-[#4b5563]">Tipo de solicitud</p>
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
          <div>
            <p className="mb-2 text-[#4b5563]">Tipo de solicitud</p>
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
          <div>
            <p className="mb-2 text-[#4b5563]">Tipo de solicitud</p>
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
          <div>
            <p className="mb-2 text-[#4b5563]">Tipo de solicitud</p>
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
        <article>
          <Button label="Guardar" severity="success" className="mt-4" />
        </article>
      </section>
    </MainLayout>
  );
}

export default IndexConfiguration;
