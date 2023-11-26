import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Residence.css";
import "swiper/css";
import data from "../../utils/Slider.json";
import r1 from "../Images/r1.png";
import { sliderSetting } from "../../utils/common";

const Residence = () => {
  return (
    <div>
      <div className="r-wrapper">
        <div className="padding innerwidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>
          <div className="empty"></div>

          <Swiper {...sliderSetting}>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <SliderBtn />
                <div className="flexColStart r-card">
                  <img src={r1} alt="home" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>

                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Residence;

const SliderBtn = () => {
  const Sweep = useSwiper();
  return (
    <div className="flexCenter r-btn">
      <button onClick={()=>Sweep.slidePrev()}>&lt;</button>
      <button onClick={()=>Sweep.slideNext()}>&gt;</button>
    </div>
  );
};
