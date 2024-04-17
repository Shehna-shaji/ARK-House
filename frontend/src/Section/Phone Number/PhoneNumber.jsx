import React from "react";
import "./PhoneNumber.css";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const PhoneNumber = ({ placeholder, phno, className, label, link }) => {
  return (
    <div className="phone-number" id="phone">
      <div className="input-section">
        <h5 className="form-title">We will be glad to contact you</h5>
      </div>
      <div className="phone-email-change">
        <div className={phno}>
          <a href="#phone" className={link}>
            {" "}
            <h6 className={label}>Phone Number</h6>
          </a>
        </div>
        <div className={className}>
          <a href="#email" className={link}>
            {" "}
            <h6 className="label-email">Email</h6>
          </a>
        </div>
      </div>
      <p className="form-subtitle">
        Give us your number and <br /> we will call you now
      </p>

      <form className="inputs">
        <input type="text" placeholder="Your Name" className="name-input" />
        <input type="text" placeholder={placeholder} className="number-input" />
      </form>
      <Button text="Contact Us" />
    </div>
  );
};

export default PhoneNumber;
