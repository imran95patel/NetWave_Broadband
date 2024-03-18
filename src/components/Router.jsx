import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faTv,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import img from "../assets/router.png";

const Router = () => {
  return (
    <div className="flex">
      <div className="left w-[50vw] h-[100vh]">
        <div className="w-full h-screen mt-48 ">
          <span className="bg-[#99CC03] text-[#f1f1f1] rounded-sm p-1 px-4 text-sm ml-12">
            SECURE CONNECTION
          </span>
          <div className="text-4xl font-bold ml-12 mt-8">
            <p>10x faster than the</p>
            <p>current standard of</p>
            <p>WiFi.</p>
          </div>
          <button className="text-gray-100 font-bold py-3 px-8 rounded inline-flex items-center ml-12 mt-8 bg-[#038B1C] hover:bg-[#99CC03] text-xs transition duration-300 ease-in-out">
            GET STARTED
          </button>
        </div>
      </div>
      <div className="mid w-[50vw] h-[100vh]">
        <img src={img} alt="" />
      </div>
      <div className="right w-[50vw] h-[100vh]">
        <div className="w-full h-screen flex flex-col gap-10">
          <p className="mt-48 w-full flex items-center">
            <FontAwesomeIcon
              icon={faEarthAmericas}
              style={{ color: "#99CC03" }}
              className="h-10 w-10 ml-20 "
            />
            <div className="text-2xl ml-7 font-semibold">
              Ultra fast Connection
            </div>
          </p>
          <p className="w-full flex items-center">
            <FontAwesomeIcon
              icon={faTv}
              style={{ color: "#99CC03" }}
              className="h-10 w-10 ml-20"
            />
            <div className="text-2xl ml-7 font-semibold">Satellite TV</div>
          </p>
          <p className="h-10 w-10 flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#99CC03" }}
              className="h-10 w-10 ml-20"
            />
            <div className="text-2xl ml-7 font-semibold">VOIP</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Router;