import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home  from './components/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToTop from "./components/ToTop";
import Navbar from "./components/Navbar";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import Slider from "./components/Slider";
import Admin from "./Pages/Admin";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Admin/>
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ToTop />} />
          <Route path="/Admin" element={<Admin />} />
          
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;