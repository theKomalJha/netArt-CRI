import React from "react";

const Herosection = () => {
  return (
    <div className="flex lg:flex-row w-11/12 mx-auto flex-col gap-2 ">
      <div className="">
        <img src="/asserts/1.png" />
      </div>
      <div className="text-md">
        <div className="">
          <h2 className="font-bold">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h2>
          <ul className="list-disc font-semibold ml-2">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              {" "}
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
        </div>
        <div className="my-2">
          <img src="/asserts/2.png" />
        </div>
        <div>
          <p className="text-md">
            Government of India has awarded the{" "}
            <span className="font-semibold">
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
