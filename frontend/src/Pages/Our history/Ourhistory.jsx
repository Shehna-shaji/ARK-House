import React from "react";
import "../Home/Home.css";
import "./Ourhistory.css";
import WeAreSection from "../../Section/Who we are/WeAreSection";
import History from "../../Section/HistorySection/History";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

const Ourhistory = () => {
  return (
    <div className="history-page">
      <Breadcrumbs />
      <WeAreSection />
      <History />
    </div>
  );
};

export default Ourhistory;
