import React from "react";
import { Menubar } from "primereact/menubar";
import { Image } from "primereact/image";
import "primeicons/primeicons.css";
import './Navbar.css'

export default function Navbar() {
  const start = (
    <Image
      src="/images/logo.png"
      alt="logo"
      className="h-3rem"
    />
  );

  const end = (
    <i
      className="pi pi-cog text-white"
      style={{ fontSize: "24px", width: "24px", height: "24px" }}
    />
  );

  return (
    <div className="bg-blue-500">
      <Menubar
        model={[]}
        start={start}
        end={end}
        className="custom-menubar"
      />
    </div>
  );
}
