import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import MaxWidthWrapper from "./Components/MaxWidthWrapper/MaxWidthWrapper";

import Ourhistory from "./Pages/Our history/Ourhistory";
import Projects from "./Pages/Projects/Projects";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs";
import CentralSaintGiles from "./Pages/Central Saint Giles/CentralSaintGiles";
import Contact from "./Pages/Contact Page/Contact";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <MaxWidthWrapper>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/ourhistory" element={<Ourhistory />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/CentralSaintGiles"
              element={<CentralSaintGiles />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </MaxWidthWrapper>
      </BrowserRouter>
    </div>
  );
}
