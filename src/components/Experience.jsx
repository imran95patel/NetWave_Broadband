import React from "react";
import img from "../assets/dad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div className="w-full h-screen relative">
      <div className=" absolute top-24 left-20 w-36 p-1 py-2 rounded-md bg-[#03E9F4] text-center text-black font-bold text-sm">
        WHAT WE OFFER
      </div>
      <div className="absolute top-40 left-20 text-4xl text-black font-bold">
        Empowering people through
        <p>technology.</p>
      </div>
      <div className="absolute flex flex-col top-72 gap-9">
        <p>
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#03E9F4" }}
            className="h-10 w-10 ml-20 "
          />
          <h1 className="w-44 text-black font-bold text-xl absolute left-36 top-2">
            Internet for home
          </h1>
        </p>
        <p>
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#03E9F4" }}
            className="h-10 w-10 ml-20 "
          />
          <h1 className="w-56 text-black font-bold text-xl absolute left-36 top-24">
            Internet for Business
          </h1>
        </p>
        <p>
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#03E9F4" }}
            className="h-10 w-10 ml-20 "
          />
          <h1 className="w-56 text-black font-bold text-xl absolute left-36 top-44">
            Internet for Educations
          </h1>
        </p>
      </div>
      <div className="right">
        <div className="flex w-[40vw] h-[95vh] items-center relative left-[55vw] top-20 ">
          <img src={img} className="rounded-r-3xl" />
        </div>
        <div
          className="rounded-full h-36 w-36 absolute top-16 right-[80vh]"
          style={{
            background: "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
            backgroundImage:
              "-moz-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
            backgroundImage:
              "-webkit-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
            backgroundImage: "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
            filter:
              'progid:DXImageTransform.Microsoft.gradient( startColorstr="#0061FF", endColorstr="#60EFFF",GradientType=1)',
          }}
        >
          <div className="absolute top-7 left-5 text-white">
            <p className="absolute left-4 text-5xl font-bold">15+</p>
            <p className="absolute w-36 left-4 top-11 text-sm font-semibold">
              YEARS OF
            </p>
            <p className="absolute top-16 left-2 text-sm font-semibold">
              EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
