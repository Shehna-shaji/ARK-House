import React from "react";
import arrow from "../../assets/arrow-up-right.png";
import "./Button.css";

export default function Button({ text }) {
  return (
    <div className="button">
      <button>
        <div className="button-text">{text}</div>
        <div className="arrow-frame">
          <img src={arrow} className="arrow-img" />
        </div>
      </button>
    </div>
  );
}
