import React from "react";
import "./Footer.css";
import logo from "../Images/logo2.png";
const Footer = () => {
  return (
    <div>
      <section className="f-wrapper">
        <div className="padding inerWidth flexCenter f-container">
          {/* left */}
          <div className="flexColStart f-left">
            <img src={logo} alt="" width={120} />

            <span className="secondaryText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            </span>
          </div>
          {/* right */}

          <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className="secondaryText"> 145 New York</span>

            <div className="flexCenter f-menu">
              <span>Property</span>
              <span>About Us</span>
              <span> Services</span>
              <span>Product</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
