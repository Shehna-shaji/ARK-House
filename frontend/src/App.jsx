import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import MaxWidthWrapper from "./Components/MaxWidthWrapper/MaxWidthWrapper";
import About from "./Section/AboutSection/About";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <MaxWidthWrapper>
          <Header />


        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About/>} /> */}
          
        </Routes>
        <Footer/>
        </MaxWidthWrapper>
      </BrowserRouter>
    </div>
  );
}
