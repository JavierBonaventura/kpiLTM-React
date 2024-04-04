import React from "react";
import fondoBodega from "../images/fondoBodega.png";
import { Link } from "react-router-dom";

function Bodega() {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.63)",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  return (
    <div
      className="w-full  bg-cover bg-center relative py-24"
      style={{ backgroundImage: `url(${fondoBodega})` }}
    >
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col gap-y-20 relative  z-10">
        <h1
          className="text-white text-4xl lg:text-6xl lg:leading-[70px] tracking-[-1px] uppercase"
          style={gothamBlack}
        >
          BODEGA
        </h1>

        <div className="w-full lg:w-2/5">
          <p className="text-left text-lg leading-[28px] font-gotham text-white">
            Nuestros vinos nacen de la experiencia, la atención al detalle y una
            exhaustiva selección de viñedos que se ha ido haciendo a lo largo de
            casi dos décadas. <br /> <br /> Trabajamos en torno a 3 pilares
            fundamentales: Naturaleza, Innovacion y Sostenibilidad.
          </p>
        </div>
        <div className="flex">
          <div className="inline-block mr-auto z-10">
            <Link
              to="/bodega"
              className="border border-white text-white px-10 pt-5 pb-3 lg:py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
            >
              VER MÁS
            </Link>
          </div>
        </div>
      </div>

      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default Bodega;
