import React, { useState } from "react";
import Logo from "../Images/logo.png";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menu, setMenu] = useState(false);

  const getMenuStyled = (menu) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menu && "-100%" };
    }
  };
  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter padding innerWidth h-container">
          <img src={Logo} alt="Logo"  />

          <OutsideClickHandler 
          onOutsideClick={()=>{
            setMenu(false)
          }}
          >
            <div
              className="flexCenter padding h-menu"
              style={getMenuStyled(menu)}
            >
              <a href="#home">Residence</a>
              <a href="#about">Our Value</a>
              <a href="#services">Contact us</a>
              <a href="#portfolio">Get Started</a>
              <a href="#contact">Contact</a>
              <button className="button">Contact</button>
            </div>
          </OutsideClickHandler>
          <div className="menu-icon" onClick={() => setMenu((prev) => !prev)}>
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
