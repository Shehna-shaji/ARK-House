import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

import MaxWidthWrapper from "./Components/MaxWidthWrapper/MaxWidthWrapper";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <MaxWidthWrapper>
          <Header />
        </MaxWidthWrapper>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
