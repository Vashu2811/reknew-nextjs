import React from "react";
import Image from "next/image";
import "./globals.css"
import logo from '../../public/assets/Priloader.png';


const loading = () => {
  return <div className={`preloader`}>
  <Image
    src={logo} 
     alt="ReKnew logo"
     width={125}
     height={50}
     className="lg:w-[125px] xl:w-full"
     priority
   />
</div>;
};

export default loading;
