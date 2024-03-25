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
          <h6 className="subtitle">Since 1975 — </h6>
          <h2 className="hero-text">Architecture.<br/> Planning.<br/> Design.</h2>
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
     <center> <div className="bg-color">
     <img src={heroimage} className="hero-img"/>
        {/* <div className="background">
        
        </div> */}
      </div>
      </center>
    
    </div>
    </MaxWidthWrapper>
    
  );
};

export default Hero;
