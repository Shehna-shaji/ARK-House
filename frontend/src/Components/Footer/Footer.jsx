import React from "react";
import Heading from "../Section-Heading/Heading";
import Button from "../Button/Button";
import "./Footer.css";
import details from "../../assets/address";
import Menu from "../Menu/Menu";
import SocialMediaIcon from "../Social-Media/SocialMediaIcon";

const Footer = () => {
  const Address = ({ address }) => {
    return (
      <span className="footer-text">
        <div className="address">{address}</div>
      </span>
    );
  };
  return (
    <footer className="footer">
      <Heading title="Start a Project?" text="Contact Us" />
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-title">Support is available <br/> 24 hours</h3>
          <Button text="Contact Us" />
        </div>
        <div className="footer-right">
          {details.map((data) => {
            return (
              <div key={data.id}>
                {data.address.map((contact) => {
                  return (
                    <div className="address">
                      <p>{contact.direction}</p>
                      <p>{contact.name}</p>
                      <p>{contact.unitno}</p>
                      <p>{contact.place}</p>
                      <p>{contact.streetno}</p>
                      <p>{contact.street}</p>
                      <p>{contact.state}</p>
                      <p>{contact.landmark}</p>
                      <p>{contact.pincode}</p>
                      {/* <br/> */}
                      <p className="whitespace">&nbsp;&nbsp;</p>

                      <p> {contact.phone}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        

      </div>
      <div className="menu-social-media">
        
        <Menu/>
        <SocialMediaIcon/>
      </div>
      <hr/>
      <div className="copy-right-privacy">
        <div className="copy-right">
          <div className="copy-right-icon">
            <p> ©</p>
          </div>
          <div className="copy-right-text">
            <h6>Copywriting | All Rights Reserved</h6>
          </div>
        </div>
        <div className="privacy">
          <h6 className="privacy-text">Terms of Use | Privacy</h6>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
