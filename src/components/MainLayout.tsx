import React from "react";
import Sidebar from "./Sidebar";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full p-8 bg-[#f5f5f5]">{children}</main>
    </div>
  );
};

export default MainLayout;
