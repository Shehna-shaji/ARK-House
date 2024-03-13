import React, { useState } from "react";
import "./Menu.css";
import menu from "../../assets/menu";

export default function Menu() {
  const Menu = (props) => {
    const { number, text } = props;
    return (
      <div>
        <span className="menu-number">{number}</span>

        <span className="menu-list">
          <a href="#">{text}</a>
        </span>
      </div>
    );
  };
  return (
    <div>
      <div className="menu-item">
        {menu.map(({ number, text }, i) => {
          return <Menu key={i} number={number} text={text} />;
        })}
      </div>
    </div>
  );
}
