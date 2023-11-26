import React from "react";
import "./Contact.css";
import Contacts from "../Images/contact.jpg";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";


const Contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="padding innerWidth flexCenter c-container">
          {/* left */}
          <div className="flexColStart c-left">
            <span className="orangeText">Our Contact</span>
            <span className="primaryText">Easy to Contact us</span>
            <span className="secondaryText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              aliquam sint vitae minima similique aperiam nesciunt eligendi
              error facilis adipisci iure
            </span>

            <div className="flexColStart contactModes">

              {/* first row */}
              <div className="flexStart row ">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={20} />
                    </div>

                    <div className="flexColStart detail">
                      <span>Call</span>
                      <span>021 123 345</span>
                    </div>
                  </div>
                  <div className="flexCenter button primaryText">Call Now</div>
                </div>
              
              </div>
            </div>

            {/* second Mode */}
            <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={20} />
                    </div>

                    <div className="flexColStart detail">
                      <span>Chat</span>
                      <span>021 123 345</span>
                    </div>
                  </div>
                  <div className="flexCenter button primaryText">Chat Now</div>
                </div>

            {/* Second Row */}
            <div className="flexStart row second">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={20} />
                    </div>

                    <div className="flexColStart detail">
                      <span>Video Call</span>
                      <span>021 123 345</span>
                    </div>
                  </div>
                  <div className="flexCenter button primaryText">Video Call Now</div>
                </div>
              </div>

              {/* fourth mode */}
              <div className="flexColCenter mode fourth">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={20} />
                    </div>

                    <div className="flexColStart detail">
                      <span>Message</span>
                      <span>021 123 345</span>
                    </div>
                  </div>
                  <div className="flexCenter button primaryText">Message Now</div>
                </div> 

          </div>

          {/* right */}
          <div className="c-right">
            <div className="img-container">
              <img src={Contacts} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
