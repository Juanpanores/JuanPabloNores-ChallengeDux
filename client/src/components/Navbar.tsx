import React from "react";
import { Menubar } from "primereact/menubar";
import { Image } from "primereact/image";
import './Navbar.css'


export default function Navbar() {
  const start = (
    <Image
      src="/images/logo.png"
      alt="logo"
      className="h-3rem" /* PrimeFlex class for height */
    />
  );

  const end = (
    <i
      className="pi pi-cog text-white text-2xl" /* PrimeFlex classes for color and size */
    />
  );

  return (
    <div className="bg-blue-500 h-4rem"> {/* Asegúrate de que la altura esté definida */}
      <Menubar
        model={[]}
        start={start}
        end={end}
        className="custom-menubar"
      />
    </div>
  );
}
