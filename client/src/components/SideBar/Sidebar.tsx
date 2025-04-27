import React from "react";
import { Image } from "primereact/image";
import "primeflex/primeflex.css";
import "./Sidebar.css"; // Import the CSS file

export default function Sidebar() {
  const sidebarItems = [
    { src: "/images/cube.png", alt: "Button 1" },
    { src: "/images/cube.png", alt: "Button 2" },
    { src: "/images/cube.png", alt: "Button 3" },
    { src: "/images/cube.png", alt: "Button 4" },
    { src: "/images/cube.png", alt: "Button 5" },
    { src: "/images/cube.png", alt: "Button 6" },
  ];

  return (
    <div className="custom-sidebar">
      {sidebarItems.map((item, index) => (
        <div
          className="flex justify-content-center align-items-center cursor-pointer w-2rem h-2rem"
          key={index}
        >
          <Image src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}