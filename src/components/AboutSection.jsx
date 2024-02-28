import React from "react";
import Herosection from "./Herosection";

const AboutSection = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto font-semibold my-4">
        <div>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.{" "}
        </div>
        <div className="">
          <img src="./asserts/3.png"></img>
        </div>
        
        </div>

        <div className="border-red-500  border-b-2 mx-3 pb-2">
          <p className="text-center">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </p>
          
         
      </div>
      <div className=" w-11/12 mx-auto flex flex-col gap-4 my-3">
            <p className="font-bold text-center ">
              C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </p>
            <p>CHEMICALS <span className="text-red-500">|</span> PROCESS POWER WATER <span className="text-red-500">|</span> WASTE WATER OILS <span className="text-red-500">|</span> GAS PHARMA SUGARS <span className="text-red-500">|</span> DISTILLERIES PAPER <span className="text-red-500">|</span> PULP MARINE <span className="text-red-500">|</span> DEFENCE METAL <span className="text-red-500">|</span> MINING FOOD <span className="text-red-500">|</span> BEVERAGE PETROCHEMICAL <span className="text-red-500">|</span> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span className="text-red-500">|</span> RESIDENTIAL</p>
          </div>
    </div>
  );
};

export default AboutSection;
