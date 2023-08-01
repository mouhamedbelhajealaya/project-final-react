import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion';
import { useState } from 'react';
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
       {/* left side image */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt=""/>
          </div>
        </div>
        {/* right side text */}
        <div className="flexColStart v-right">
          <span className="orangeText">Nos Agences</span>
          <span className="primaryText">XPERT-STORE</span>
          <span className="secondaryText">
          Nos agences sont des piliers essentiels de notre entreprise, offrant des services de qualité, une expertise solide et une proximité précieuse pour répondre aux besoins de nos clients.
            <br/>
          
          </span>
          <Accordion
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {data.map((item, i)=> {
              const[className, setClassName] = useState(null)

                return(
                  <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState>
                          {({expanded}) =>
                            expanded 
                              ? setClassName("expanded") 
                              : setClassName("collapsed")
                            }
                            </AccordionItemState>

                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20}/>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>

                  </AccordionItem>
                )
              })
            }
          </Accordion>
        </div>
      </div>
    </section>
  )
}
export default Value
