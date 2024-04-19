import React, { useState } from "react";
import "./Service.css";
import Heading from "../../Components/Section-Heading/Heading";
import servicenumber from "../../assets/number3.png";
import architecture from "../../assets/Architecture.png";
import landscape from "../../assets/S-Line.png";
import interior from "../../assets/Image2.png";
import design from "../../assets/Image3.png";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(architecture);
  const [isFocused, setIsfocused] = useState(architecture);

  const img1 = architecture;
  const img2 = landscape;
  const img3 = interior;
  const img4 = design;

  const handleChange = (imageName) => {
    setImage(imageName);
    setIsfocused(imageName);
  };

  return (
    <div id="services" className="service-section">
      <Heading
        title="Services"
        text="Contact Us"
        onclick={() => navigate("/contact")}
      />
      <div className="section-container">
        <div className="section-left">
          <div className="number-description">
            <img src={servicenumber} className="number" />

            <h3 className="service-text">
              Offices around <br />
              the world
            </h3>
          </div>
          <div className="service-menu">
            <ul className="service-list">
              <li
                onClick={() => handleChange(img1)}
                className={
                  isFocused === img1 ? "menu-text" : "service-menu-text"
                }
              >
                Architecture{" "}
              </li>
              <li
                onClick={() => handleChange(img2)}
                className={
                  isFocused === img2 ? "menu-text" : "service-menu-text"
                }
              >
                Landscape{" "}
              </li>
              <li
                onClick={() => handleChange(img3)}
                className={
                  isFocused === img3 ? "menu-text" : "service-menu-text"
                }
              >
                Interior{" "}
              </li>

              <li
                onClick={() => handleChange(img4)}
                className={
                  isFocused === img4 ? "menu-text" : "service-menu-text"
                }
              >
                Design{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="service-text-container">

        </div> */}
        <div className="section-right">
          <div className="image-container">
            {image && <img src={image} className="service-image" />}
          </div>
          <div className="service-description">
            <div className="text-btn-container">
              <p className="service-description-text">
                At the heart of everything we do is the human experience <br />
                to feel. To love. To image. To wonder. To guide. To jest. To
                <br /> rule. To serve. To belong.
              </p>
              <Button text="Contact Us" onclick={() => navigate("/contact")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
