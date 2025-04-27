import React from "react";
import { Image } from "primereact/image";
import "primeflex/primeflex.css";

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
    <div className="flex flex-column align-items-center bg-gray-900 h-screen w-5rem p-3 gap-3">
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