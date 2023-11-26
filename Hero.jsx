import React from "react";
import Heros from "../Images/hero-image.png";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
// import { MdWidthFull } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="white-gradient"></div>
      <div className="padding innerWidth flexCenter hero-container">
        {/* left  */}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
            initial = {{y:"5rem", opacity:0}}
            animate= {{y:0, opacity:"1"}}
            transition={{
              type:"spring",
              duration: 2,
            }}
            >
              Discover <br />
              Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
            <span className="secondaryText">
              Find a Variety of properties that suits you very Easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          {/* Search bar */}
          <div className="flexCenter search-bar">
            <HiLocationMarker color="blue" size="25px" />

            <input type="text" />

            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <br />

            <div className="flexColStart stat">
              <span>
                <CountUp start={1850} end={2000} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <br />

            <div className="flexColStart stat">
              <span>
                <CountUp end={29} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="flexCenter hero-right">
          <motion.div
          initial = {{x:"7rem", opacity:"0"}}
          animate ={{x:0, opacity:"2"}}
          transition={{
            type:"spring",
            duration:2
          }}
          className="img-container">
            <img src={Heros} alt="Hero" style={{ width: "29rem" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
