import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "./Value.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import value from "../Images/value.png";
import data from "../../utils/Accordian";
import { useState } from "react";
const Value = () => {
  return (
    <div>
      <section className="v-wrapper">
        <div className="innerWidth padding flexCenter v-container">
          {/* left side */}
          <div className="img-container">
            <img src={value} alt="" />
          </div>

          {/* right side */}
          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value we give to you</span>
            <span className="secondaryText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <br /> Sed, sapiente! Adipisci ea soluta consectetur, dicta eius
              necessitatibus aliquam.
            </span>

            <Accordion
              className="Accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                const [className, setClassName] = useState(false)
                return (
                  <AccordionItem className = {`Accordion-Item ${className}`}key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordion-btn">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>

                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText head">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Value;
