import { useState } from "react";
import reportIcon from "./../assets/reports.svg";
import dropletIcon from "./../assets/droplet.svg";
import arrowIcon from "./../assets/arrow.svg";
import settingsIcon from "./../assets/settings.svg";
import { Link } from "react-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-[#139A43] h-screen p-5 pt-8 relative`}
    >
      <div className="flex">
        <button
          className={`bg-[#139A43] text-white rounded-full p-2 ml-auto w-8 h-8 hover:bg-[#0DAB76] border-solid border-1 border-white ${
            isOpen ? "rotate-180" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={arrowIcon} alt="report-icon" />
        </button>
      </div>

      <h1 className={`text-white text-lg font-bold ${!isOpen && "scale-0"}`}>
        HydroSense
      </h1>

      <ul className="mt-10 space-y-4">
        <Link to="/dashboard">
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer hover:bg-[#0DAB76] p-2 rounded-md">
            <span className="material-icons">
              <img src={reportIcon} alt="report-icon" />
            </span>
            <span className={`${!isOpen && "hidden"}`}>Tablero</span>
          </li>
        </Link>
        <Link to="/detector">
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer hover:bg-[#0DAB76] p-2 rounded-md">
            <span className="material-icons">
              <img src={dropletIcon} alt="report-icon" />
            </span>
            <span className={`${!isOpen && "hidden"}`}>Detección de fugas</span>
          </li>
        </Link>
        <Link to="/configuration">
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer hover:bg-[#0DAB76] p-2 rounded-md">
            <span className="material-icons">
              <img src={settingsIcon} alt="report-icon" />
            </span>
            <span className={`${!isOpen && "hidden"}`}>Configuración</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
