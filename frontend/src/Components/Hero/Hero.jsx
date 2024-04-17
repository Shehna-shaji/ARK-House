import React from "react";
import "./Hero.css";
import Button from "../Button/Button";
import SocialMediaIcon from "../Social-Media/SocialMediaIcon";
import heroimage from "../../assets/HeroImage.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-section">
        <div className="hero-left">
          <h6 className="subtitle">Since 1975 — </h6>
          <h2 className="hero-text">
            Architecture.
            <br /> Planning.
            <br /> Design.
          </h2>
        </div>
        <div className="hero-right">
          <div className="hero-btn">
            <Button text="Contact Us" onclick={() => navigate("/contact")} />
          </div>
          <div className="group-social-icon">
            <SocialMediaIcon />
          </div>
        </div>
      </div>{" "}
      <div className="bg-color">
        <img src={heroimage} className="hero-img" />
        {/* <div className="background">
        
        </div> */}
      </div>
      <hr />
    </section>
  );
};

export default Hero;
