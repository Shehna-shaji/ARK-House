import React, { useState } from "react";
import "./Contact.css";

import "../Home/Home.css";
import Button from "../../Components/Button/Button";

const Contact = () => {
  const [phno, setPhno] = useState(true);
  const [email, setEmail] = useState(true);

  const handleClick = () => {
    setPhno(!phno);
    setEmail(!email);
  };

  return (
    <div className="phone-number" id="phone">
      <div className="input-section">
        <h5 className="form-title">We will be glad to contact you</h5>
      </div>
      <div className="phone-email-change">
        <button
          className={phno ? "phone-number-container" : "phone-container"}
          onClick={handleClick}
        >
          <h6 className={phno ? "label-text" : "phno-text"}>Phone Number</h6>
        </button>
        <button
          className={email ? "email" : "email-container"}
          onClick={handleClick}
        >
          <h6 className={email ? "label-email" : "email-text"}>Email</h6>
        </button>
      </div>
      <p className="form-subtitle">
        Give us your number and <br /> we will call you now
      </p>

      <form className="inputs">
        <input type="text" placeholder="Your Name" className="name-input" />
        {phno ? (
          <input
            type="number"
            placeholder="(+33)7 00 55 59 27"
            className="number-input"
          />
        ) : (
          <input
            type="email"
            placeholder="username@gmail.com"
            className="email-input"
          />
        )}
      </form>
      <Button text="Contact Us" />
    </div>
  );
};

export default Contact;
