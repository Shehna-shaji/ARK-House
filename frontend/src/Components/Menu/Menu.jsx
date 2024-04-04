import React, { useState } from "react";
import "./Menu.css";
import menu from "../../assets/menu";
import { HashLink } from "react-router-hash-link";

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
        {/* {menu.map(({ number, text }, i) => {
          return <Menu key={i} number={number} text={text} />;
        })} */}
        <HashLink to="#about">
          <Menu number={1} text="About" />
        </HashLink>
        <HashLink to='#services'>
          <Menu number={2} text="Services" />
        </HashLink>
        <HashLink to="#projects">
          <Menu number={3} text="Projects" />
        </HashLink>
        <HashLink>
          <Menu number={4} text="Team" />
        </HashLink>

        <HashLink>
          <Menu number={5} text="Blog" />
        </HashLink>
      </div>
    </div>
  );
}
