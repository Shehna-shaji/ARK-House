import React, { useState } from "react";
import "./Header.css";
import ARKLogo from "../../assets/ARKLogo.png";
import Menu from "../Menu/Menu";
import { FiAlignJustify } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className={isOpen === true ? "header-container" : "header-items"}>
        <div className="header-logo">
          <img src={ARKLogo} className="logo-img" />
        </div>

        <div className={isOpen === true ? "menu-container" : "menu"}>
          <Menu />
        </div>

        <span className="nav-menu" onClick={toggleMenu}>
          <FiAlignJustify />
        </span>
      </div>
      <hr />
    </header>
  );
}
