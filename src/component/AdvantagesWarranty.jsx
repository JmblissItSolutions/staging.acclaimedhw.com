import React from "react";
import bluephone from "./../assets/images/blue-phone.jpg";
import bluepiggy from "./../assets/images/blue-piggy.jpg";
import bluecall from "./../assets/images/blue-call.jpg";
import bluemarker from "./../assets/images/blue-marker.jpg";
import Carousel from 'react-bootstrap/Carousel'

const Fasterfixes = () =>{
    return(
    <>
       <div className="Fasterfixes">
        <i className="achis blue-phone">
        <img src={bluephone} alt="Blue phone" /></i>
        <h4>Faster Fixes</h4>
        <p>We have experienced contractors available to complete repairs 24 hours a day 365 days a year.</p>
    </div>
    </>
    );
}
const Numerousplan = () =>{
    return(
       <>
        <div className="Experienced">
        <i className="achis blue-phone">
        <img src={bluepiggy} alt="Blue phone" /></i>
        <h4>Numerous Plan Options</h4>
        <p>You’ll have the option to choose from numerous plans that will cater to your best interests and fit within your budget.</p>
       </div>
          </>
    );
   }
  const ResponsiveCustomer = () => {
        return(
           <>
         <div className="ResponsiveCustomer">
         <i className="achis blue-phone">
        <img src={bluecall} alt="Blue phone" /></i>
        <h4>Responsive Customer Service</h4>
        <p>Our customer service team is always ready to take your call and connect you with a qualified contractor.</p>
       </div>
           </>
        )
    };
    const LocallyOwned = () => {
        return(
           <>
         <div className="LocallyOwned">
         <i className="achis blue-phone">
            <img src={bluemarker} alt="Blue phone" /></i>
            <h4>Locally Owned</h4>
            <p>Our company is locally owned and managed, which means we know the area and the unique challenges homeowners face.</p>
       </div>
           </>
        )
    };
    const AdvantageSlideshow = () =>{
        return(
            <>
        <Carousel fade={true}>
            <Carousel.Item>
            <Fasterfixes/>
            </Carousel.Item>
            <Carousel.Item>
            <Numerousplan/>
            </Carousel.Item>
            <Carousel.Item>
            <ResponsiveCustomer/>
            </Carousel.Item>
            <Carousel.Item>
            <LocallyOwned/>
            </Carousel.Item>
      </Carousel>
            </>
        );
    }
export{
    Fasterfixes,
    Numerousplan,
    ResponsiveCustomer,
    LocallyOwned,
    AdvantageSlideshow ,
}