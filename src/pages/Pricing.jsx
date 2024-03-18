import React, { useState } from "react";
import img from "../assets/img_1.png";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Basic",
      monthalyPrice: 400,
      yearlyPrice: 4500,
      description: " 25 Mbps",
      green: "src/assets/Image.png",
    },
    {
      name: "Advance",
      monthalyPrice: 600,
      yearlyPrice: 7000,
      description: " 50 Mbps",
      green: "src/assets/Image.png",
    },
    {
      name: "Premium",
      monthalyPrice: 800,
      yearlyPrice: 9000,
      description: " 80 Mbps",
      green: "src/assets/Image.png",
    },
  ];

  return (
    <>
      <div className=" bg-gradient-to-r  ">
        <div className="inset-0  mt-[100vh] absolute ">
          <img src={img} alt="" />
        </div>
        <div className="relative top-0">
          <div className="text-center ">
            <div className="flex justify-center">
              <h2 className="bg-[#99CC03] w-fit px-10 py-1 mt-10 rounded-lg">
                CHOOSE YOUR PLAN
              </h2>
            </div>
            <br />
            <h2 className="md:text-5xl text-3xl font-extended text-primary md">
              Here are all our Plans
            </h2>
            <br />
            <h2 className="md:text-5xl text-3xl mx-auto px-4 ">
              Biggest savings ever on home satellite internet.
            </h2>
          </div>
          <div>
            <div className=" flex mt-10 ml-56 mr-56 justify-evenly py-5 text-xl font-normal ">
              <div className="bg-slate-500 flex items-center rounded-se-full py-1 px-5 text-white">
                <input
                  className="size-5 py-1 mr-3"
                  type="radio"
                  id="Monthly"
                  name="options"
                  value="option1"
                />
                <label className="">MONTHLY</label>
              </div>
              <div className="bg-slate-500 flex items-center rounded-se-full py-1 px-5 text-white">
                <input
                  className="size-5 pt-1 mr-3"
                  type="radio"
                  id="Monthly"
                  name="options"
                  value="option1"
                />
                <label className="mr-4">QUARTERLY</label>
              </div>
              <div className="bg-slate-500 flex items-center rounded-se-full py-1 px-5 text-white ">
                <input
                  className="size-5 pt-1 mr-3"
                  type="radio"
                  id="Monthly"
                  name="options"
                  value="option1"
                />
                <label className="mr-4">6 MONTHS</label>
              </div>
              <div className="bg-slate-500 flex items-center rounded-se-full py-1 px-5 text-white">
                <input
                  className="size-5 pt-1 mr-3"
                  type="radio"
                  id="Monthly"
                  name="options"
                  value="option1"
                />
                <label className="mr-4">YEARLY</label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 mt-20 w-11/12 mx-auto  ">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="border py-5 px-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-200 "
                style={{
                  boxShadow:
                    "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                }}
              >
                <h3 className="text-3xl font-bold text-center text-slate-600">
                  {pkg.name}
                </h3>
                <p className="text-green-500 text-center my-5 text-2xl font-semibold">
                  {pkg.description}
                </p>
                <p className="mt-5 text-purple-500 text-center text-4xl font-bold ">
                  {isYearly ? `₹${pkg.yearlyPrice}` : ` ₹${pkg.monthalyPrice}`}{" "}
                  {/* <span className="text-base text-neutral-500 font-medium">
                {isYearly ? `year` : `month`}
              </span> */}
                </p>
                <ul className="mt-4 space-y-2 px-20 w-full divide-y divide-dashed hover:divide-solid">
                  <li className="flex gap-3 items-center py-2  ">
                    <img src={pkg.green} alt="" className="w-4 h-4 " />
                    Speed Up to 25 Mbps
                  </li>
                  <li className="flex gap-3 items-center py-2 ">
                    <img src={pkg.green} alt="" className="w-4 h-4 " />
                    Free Fair Usage Policy (FUP)
                  </li>
                  <li className="flex gap-3 items-center py-2">
                    <img src={pkg.green} alt="" className="w-4 h-4 " />
                    WiFi Fiber Modem
                  </li>
                  <li className="flex gap-3 items-center py-2">
                    <img src={pkg.green} alt="" className="w-4 h-4 " />
                    IP Dynamic Private
                  </li>
                </ul>
                <br />
                <div className="py-2 font-semibold text-white bg-[#03e9f4] border-solid border-1 hover:bg-[#329095] text-center rounded-xl w-52 ml-24 ">
                  <button>SUBCRIBE NOW!</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
