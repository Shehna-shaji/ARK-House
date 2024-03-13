import React from "react";
import "./Hero.css";
import Button from "../Button/Button";
import SocialMediaIcon from "../Social-Media/SocialMediaIcon";
import heroimage from "../../assets/HeroImage.png";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

const Hero = () => {
  return (
    <MaxWidthWrapper>
    <div className="hero">
       
      <div className="hero-section">
        <div className="hero-left">
          <h2 className="subtitle">Since 1975 — </h2>
          <h2 className="hero-text">Architecture. Planning. Design.</h2>
        </div>
        <div className="hero-right">
          <div className="hero-btn">
            <Button text="Contact Us" />
          </div>
          <div className="group-social-icon">
            <SocialMediaIcon />
          </div>
        </div>
      </div>
      <div className="bg-color">
        <div className="background"></div>
      </div>
    
    </div>
    </MaxWidthWrapper>
    
  );
};

export default Hero;
