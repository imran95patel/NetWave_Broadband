import React, { useState, useEffect } from "react";
import img1 from "../assets/Design1.png";
import img2 from "../assets/Design2.png";
import img3 from "../assets/Design3.png";
import img4 from "../assets/Design4.png";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const CheckmarkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="section_top w-full h-screen relative overflow-hidden rounded-t-[40px] z-20">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-400 to-transparent opacity-60 backdrop-filter backdrop-blur-3xl"></div>
      <div className="content absolute inset-0 flex flex-col justify-center items-start text-black z-10">
        <h1 className="text-5xl font-black mt-16 ml-20 ">
          <span>Stop wasting time. Start</span>
        </h1>
        <span className="text-5xl font-black ml-20">connecting.</span>
        <div className="border border-[#3dc0f3] h-0.5 w-16 bg-[#3dc0f3] ml-20 mt-5 mb-5"></div>
        <h1 className="ml-20 font-semibold text-2xl">
          <span>
            Connect to the things that matter. Powering safer, smarter, more{" "}
          </span>
        </h1>
        <span className="ml-20 font-semibold text-2xl">
          secure, and magical experiences for you and everyone around
        </span>
        <div className="ml-20 font-semibold text-2xl mb-5">you.</div>
        <li className="ml-20 font-semibold text-1xl list-none mb-1">
          Dedicated 24/7 customer care
        </li>
        <li className="ml-20 font-semibold text-1xl list-none mb-1">
          Up to 300 GB of High-Speed Data
        </li>
        <li className="ml-20 font-semibold text-1xl list-none mb-1">
          Plus, up to $600 in deals!*
        </li>
        <button className="text-gray-100 font-bold py-5 px-10 rounded inline-flex items-center ml-20 mt-5 bg-[#03E9F4] hover:bg-[#3dc0f3] text-xs transition duration-300 ease-in-out">
          <span>SEE PLANS & DEALS</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
