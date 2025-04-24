import React from "react";
import { Menubar } from "primereact/menubar";
import { Image } from "primereact/image";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Navbar.css";

export default function Navbar() {
  const start = (<Image src="/images/logo.png" alt="logo" className="navbar-logo" />)

  const end = (<i className="pi pi-cog navbar-icon" />)

  return <Menubar model={[]} start={start} end={end} className="navbar-container" />;
}
