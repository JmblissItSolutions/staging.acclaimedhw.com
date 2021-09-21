import React, { useEffect, useState, Component } from "react";
import { Helmet } from "react-helmet";
import APIUrl from "../src/Api";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Memberadvantagesimg from "./assets/images/MemberAdvantages.png";
import * as Advantages_utah from "./component/Advantages_utah";
import * as Advantages_idaho from "./component/Advantages_idaho";
import * as Advantages_nevada from "./component/Advantages_nevada";
import * as Advantages_texas from "./component/Advantages_texas";
import * as Advantages_arizona from "./component/Advantages_arizona";

const MemberAdvantages = () => {
 
  return (
    <>
      <Helmet>
        <title>Member Advantages for Home Warranty Coverages</title>
        <meta name="description" content="Visit Acclaimed Home Warranty’s website for details about member advantages. For warranty coverages for your home in Arizona, get in touch with us today." />
      </Helmet>
      <div className="home_page member-pg">
        <div className="top_img">
          <img src={Memberadvantagesimg} alt="contactbanner" />
        </div>
        <div className="container">
          <div className="upper_text">
            <h1>Member advantages</h1>
            <p>Partnering with Acclaimed Home Warranty has many advantages. In addition to our extensive warranty coverage, our clients also benefit from the special prices we’ve negotiated for many common home services. Feel free to contact us for details about the discounted services available near you.</p>
          </div>
        </div>
        <div className="accordion member_advantage">
          <Accordion>
            <Advantages_utah.Utahadvantages />
            <Advantages_idaho.Idahoadvantages />
            <Advantages_nevada.Nevadaavantages />
            <Advantages_texas.Texasadvantages />
            <Advantages_arizona.Arizonaadvantages />
          </Accordion>
        </div>
      </div>
    </>
  )
};
export default MemberAdvantages;