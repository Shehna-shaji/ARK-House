import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;
      return (
        <div className="crumbs" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className="breadcrumbs">
      HOME <img src={arrow} className="crumbs-arrow" /> {crumbs}
    </div>
  );
};

export default Breadcrumbs;
