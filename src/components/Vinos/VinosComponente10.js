import React from "react";
import Imagen from "../../images/vinosFoto8.png";

function VinosComponente10() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl w-full lg:w-1/2 bg-[#252323] flex flex-col  justify-center lg:px-44 gap-y-6 !py-5 lg:py-0 ">
        <h1 className=" texto-guantallary" style={gothamBlack}>
          EPISODIO DEL CALLEJÓN
        </h1>

        <div>
          <h1 className="texto-guantallary-sub"></h1>
          <p className="texto-guantallary-sub mt-6">
            Episodio es un vino que representa su lugar de origen. Un Malbec de
            Vista Flores que destaca por su fuerte carácter frutal revelando
            notas de fruta roja como ciruelas y moras.
          </p>
          <div className=" inline-block mt-10">
            <div className="flex justify-center items-center z-10  flex-shrink-0 border border-white relative flex-col  hover:bg-[#460377] hover:cursor-pointer  transition-all ease-in-out duration-300 px-12 py-3">
              <p className="text-ver-mas ">ver más</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 py-32 lg:py-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${Imagen})` }}
      ></div>
    </div>
  );
}

export default VinosComponente10;
