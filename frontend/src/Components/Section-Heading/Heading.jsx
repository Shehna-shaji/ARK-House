import React from "react";
import Button from "../Button/Button";
import "./Heading.css";

const Heading = ({ title, text,onclick }) => {
  return (
    <div >
      <div className="section-header">
        <div className="section-title">{title}</div>

        <div className="heading-btn">
          <Button text={text} onclick={onclick}/>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Heading;
