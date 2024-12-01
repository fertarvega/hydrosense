import { useState } from "react";
import reportIcon from "./../assets/reports.svg";
import dropletIcon from "./../assets/droplet.svg";
import arrowIcon from "./../assets/arrow.svg";
import settingsIcon from "./../assets/settings.svg";
import irrigationIcon from "./../assets/irrigation-system.png";
import penIcon from "./../assets/pen-tablet.svg";
import { Link } from "react-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${
        isOpen ? "w-72" : "w-20"
      } bg-gradient-to-r from-[#08415C] to-[#0370a2] min-h-screen p-5 pt-4 relative`}
    >
      <div className="flex">
        <button
          className={` bg-[#08415C] text-white rounded-full px-2 ml-auto w-8 h-8 hover:bg-[#0DAB76] border-solid border-1 border-white ${
            isOpen ? "rotate-180" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={arrowIcon} alt="report-icon" />
        </button>
      </div>

      <div className="flex flex-row gap-2 text-center content-center items-center mt-2">
        <img
          src={irrigationIcon}
          alt=""
          className="bg-white/50 bg- rounded-full w-12"
        />
        <h1 className={`text-white text-lg font-bold ${!isOpen && "scale-0"}`}>
          HydroSense
        </h1>
      </div>

      <ul className="mt-10 space-y-4">
        <Link to="/">
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer hover:bg-[#0DAB76] p-2 rounded-md">
            <span className="material-icons">
              <img src={penIcon} alt="report-icon" />
            </span>
            <span className={`${!isOpen && "hidden"}`}>Inicio</span>
          </li>
        </Link>
        <Link to="/dashboard">
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer hover:bg-[#0DAB76] p-2 rounded-md">
            <span className="material-icons">
              <img src={reportIcon} alt="report-icon" />
            </span>
            <span className={`${!isOpen && "hidden"}`}>Tablero de humedad</span>
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
