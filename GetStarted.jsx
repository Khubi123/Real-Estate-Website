import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div>
      <section className="g-wrapper">
        <div className="padding innerWidth g-container">
          <div className="flexColCenter inner-container">
            <span className="primaryText">Get Started with Homyz</span>
            <span className="secondaryText">Find your Residence</span>
            <button className="button">
                <a href="mailto:khubaibwasim75@gmail.com">Get Started </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
