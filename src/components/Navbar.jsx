import React, { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import RegisterDialog from "./Pages/RegisterDialog";


const Navbar = () => {
  const [showMyModal,setShowMyModal] = useState(false)

  const showModalHandclick = ()=>{
      setShowMyModal(true)
      console.log("opennnnn");
  }

  const handleOnClose = ()=>{
    setShowMyModal(false)
  }
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "Packages", link: "/" },
    { name: "Services", link: "/" },
    { name: "About us", link: "/" },
    { name: "Contact us", link: "/" },
  ];

  return (
    <>
     <div className="bg-black 700 rounded-b-sm">
      <nav className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* Brand/logo */}
        <div className="font-Rancho font-bold text-2xl cursor-pointer flex items-center font-[poppings] text-white">
          NetWave
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex md:items-center md:pb-0 pb-12">
          {links.map((link, i) => (
            <li key={i} className="md:ml-8 text-xl md:my-0 my-7 mr-5">
              <a
                href={link.link}
                className="text-white duration-500 hover:text-[#03e9f4]"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* Example button */}
          <button className="text-[#03e9f4] text-[20px] border-2 border-[#03e9f4] px-[30px] py-[7px] rounded hover:text-black hover:bg-[#03e9f4] mx-[10px] ">
            Get started
          </button>
        </ul>

        {/* Mobile menu toggle button */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
        >
          {/* ARIA label for accessibility */}
          {open ? (
            <FaRegWindowClose aria-label="Close menu" />
          ) : (
            <FaBars aria-label="Open menu" />
          )}
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="text-white md:hidden flex flex-col items-center">
            {links.map((link, i) => (
              <li key={i} className="text-xl my-4">
                <a
                  href={link.link}
                  className="text-white duration-500 hover:text-[#03e9f4]"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* Example button */}
            <button className="text-[#03e9f4] text-[20px] border-2 border-[#03e9f4] px-[30px] py-[7px] rounded hover:text-black hover:bg-[#03e9f4] my-4"
            onClick={showModalHandclick}
            >
              Get started
            </button>

          </ul>
        )}
      </nav>
      
    </div>
    <button className="text-[#03e9f4] text-[20px] border-2 border-[#03e9f4] px-[30px] py-[7px] rounded hover:text-black hover:bg-[#03e9f4] my-4"
            onClick={showModalHandclick}
            >
              Get started
            </button>
    <RegisterDialog onClose={handleOnClose} visible={showMyModal}/>
    </>
   
  );
};

export default Navbar;
