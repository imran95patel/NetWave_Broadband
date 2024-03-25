import React from "react";
import img from "../assets/logo.png";
import Login from "../pages/Login";

const Navbar = () => {
  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="bg-zinc-900 rounded-full sticky top-0 shadow-xl shadow-[#504848] mb-[2px] z-10">
        <nav className="flex items-center justify-between px-12">
          <div className="">
            <img src={img} alt="logo" className="w-auto h-20" />
          </div>
          <ul className="flex items-center">
            <li className="ml-8 text-xl my-7 mr-5">
              <a className="text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
                Home
              </a>
            </li>
            <li className="ml-8 text-xl my-7 mr-5">
              <a className="text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
                Packages
              </a>
            </li>
            <li className="ml-8 text-xl my-7 mr-5">
              <a className="text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
                Services
              </a>
            </li>
            <li className="ml-8 text-xl my-7 mr-5">
              <a className="text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
                Contact us
              </a>
            </li>
          </ul>
          <button
            className="text-[#03e9f4] text-[20px] border-2 border-[#03e9f4] px-[30px] py-[7px] rounded hover:text-black hover:bg-[#03e9f4] my-4"
            onClick={() => setShowModal(!showModal)}
          >
            Get started
          </button>
        </nav>
      </div>
      {showModal && <Login showModal={showModal} closeModal={closeModal} />}
    </>
  );
};

export default Navbar;
