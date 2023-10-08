import React from "react";
import logo from "../images/logo.png";
import instagram from "../images/instagram.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";

function Header() {
  return (
    <header>
      <div className="w-full h-[100px] flex justify-between bg-[#252323] text-header items-center">
        <div className="h-full"></div>
        <div className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer">BODEGA</div>
        <div className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer">NUESTROS VIÑEDOS</div>
        <div className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer">NUESTROS VINOS</div>
        <div className="h-full flex items-center">
          <img src={logo} alt="Logo" className="w-32 h-20 flex-shrink-0" />
        </div>
        <div className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer">NOSOTROS</div>
        <div className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer">PRESS KIT</div>
        <div className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer">CONTACTO</div>
        <div className="h-full flex items-center">
          <img
            src={instagram}
            alt="instagram"
            className="w-6 h-6 flex-shrink-0"
          />
          <img src={google} alt="google" className="w-6 h-6 flex-shrink-0" />
          <img
            src={facebook}
            alt="facebook"
            className="w-6 h-6 flex-shrink-0"
          />
        </div>
        <div className="h-full flex items-center text-header-idiomas ">
          EN | ES
        </div>
        <div className="h-full"></div>
      </div>
    </header>
  );
}

export default Header;
