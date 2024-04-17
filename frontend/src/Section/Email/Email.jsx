import React from "react";
import PhoneNumber from "../Phone Number/PhoneNumber";
import "./Email.css";

const Email = () => {
  return (
    <div id="email">
      <PhoneNumber
        className="email-container"
        placeholder="username@gmail.com"
        phno="phone-number-text"
        label="label"
        link="link-email-text"
      />
    </div>
  );
};

export default Email;
