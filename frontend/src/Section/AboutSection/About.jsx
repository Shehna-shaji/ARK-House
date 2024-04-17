import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

import image from "../../assets/Image.png";
import image2 from "../../assets/Image2.png";
import image3 from "../../assets/Image3.png";
import Button from "../../Components/Button/Button";

const About = () => {
  const navigate = useNavigate();
  const Images = ({ photo, className }) => {
    return (
      <div className="about-image-card">
        <img src={photo} className={className} />
      </div>
    );
  };
  return (
    <section id="about" className="about-section">
      <div className="about-section-title">
        <p className="about-title">
          Forming an irrational love between clients and their buildings
        </p>
        <div className="description">
          <p>
            Our approach starts with...
            <br />
            How do you want to make people feel?
          </p>
        </div>
      </div>
      <div className="image-container">
        <Images photo={image} className="about-img" />
        <Images photo={image2} className="building-img" />
        <Images photo={image3} className="about-pic" />
      </div>
      <div className="section-description">
        <p className="description-text">
          In the face of changing trends and technologies,
          <br /> ARK House creates architecture that remains <br />
          relevant - not based on trends, fads or dates -<br /> but on timeless
          human truths.
        </p>
        <div className="section-btn">
          <Button text="Our history" onclick={() => navigate("/ourhistory")} />
        </div>
      </div>
    </section>
  );
};

export default About;
