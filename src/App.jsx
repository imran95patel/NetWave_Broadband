import { useState } from "react";

// import "./App.css";
import Navbar from "./components/Navbar";
import RegisterDialog from "./components/Pages/RegisterDialog";
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
            <Route path='/register' element={<RegisterDialog />} />
      </Routes>
    </>
  );
}

export default App;
