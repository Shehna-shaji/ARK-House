import React from "react";
import PhoneNumber from "../../Section/Phone Number/PhoneNumber";
import Email from "../../Section/Email/Email";
import '../Home/Home.css'

const Contact = () => {
  return (
    <div>
      
      <PhoneNumber
        phno="phone-number-container"
        className="email"
        label="label-text"
        placeholder="(+33)7 00 55 59 27"
        link='link-email'
      />
      

      <Email />
    </div>
  );
};

export default Contact;
