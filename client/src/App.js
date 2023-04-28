import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home  from './components/Home';
import ToTop from "./components/ToTop";
import Navbar from "./components/Navbar";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ToTop />} />
        </Routes>
        <ToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;