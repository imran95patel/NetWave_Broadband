import React from "react";

const RegisterDialog = ({ visible, onClose }) => {
  const [showMyModal,setShowMyModal] = useState(false)

  const showModalHandclick = ()=>{
      setShowMyModal(true)
      console.log("opennnnn");
  }

  const handleOnCloseLogin = ()=>{
    setShowMyModal(false)
  }
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="mt-8 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
    flex justify-center items-center "
    >
      <div className="bg-white p-2 rounded w-96 bg-gradient-to-r from-violet-400 to-fuchsia-200">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Welcome back
        </h1>
        <h3 className="text-center font-semibold text-gray-700 mb-5 ">Sign Up</h3>

        <div className="flex flex-col m-8">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5 focus:outline-none focus:ring focus:border-blue-500 ..."
            placeholder="FirstName"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5 focus:outline-none focus:ring focus:border-blue-500 ..."
            placeholder="LastName"
          />
          <input
            type="number"
            className="border border-gray-700 p-2 rounded mb-5 focus:outline-none focus:ring focus:border-blue-500 ..."
            placeholder="Mobile Number"
          />
          <input
            type="email"
            className="border border-gray-700 p-2 rounded mb-5 focus:outline-none focus:ring focus:border-blue-500 ..."
            placeholder="abc@example.com"
          />

          <input
            type="password"
            className="border border-gray-700 p-2 rounded mb-5 focus:outline-none focus:ring focus:border-blue-500 ..."
            placeholder="password"
          />
        </div>
        <div className="text-center mb-4">
          <button className="px-5 py-2 bg-blue-700 text-white rounded"
            onClick={showModalHandclick}
            >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterDialog;
