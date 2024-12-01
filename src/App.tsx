import MainLayout from "./components/MainLayout";
import { Card } from "primereact/card";
import plantImage from "./assets/plant.jpg";
import hoseImage from "./assets/hose.png";
import { Link } from "react-router-dom";

export default function App() {
  const header_1 = (
    <img alt="Card" src={plantImage} className="rounded-t-lg w-full h-60" />
  );
  const header_2 = (
    <img alt="Card" src={hoseImage} className="rounded-t-lg  w-full h-60" />
  );

  return (
    <MainLayout>
      <section>
        <h1 className="text-[#4b5563] font-bold text-2xl mb-4">
          Inicio - Acceso a módulos
        </h1>
        <article className="grid grid-cols-[repeat(auto-fill,_minmax(384px,_1fr))] gap-4">
          <Link to="/dashboard">
            <Card
              title="Tablero general"
              subTitle=""
              header={header_1}
              className="md:w-25rem"
            ></Card>
          </Link>
          <Link to="/detector">
            <Card
              title="Flujo de agua"
              subTitle=""
              header={header_2}
              className="md:w-25rem"
            ></Card>
          </Link>
        </article>
      </section>
    </MainLayout>
  );
}
