import React from "react";
import bluephone from "./../assets/images/blue-phone.jpg";
import bluepiggy from "./../assets/images/blue-piggy.jpg";
import bluecall from "./../assets/images/blue-call.jpg";
import bluemarker from "./../assets/images/blue-marker.jpg";
import Carousel from 'react-bootstrap/Carousel'

const ChooseWhat = () =>{
    return(
    <>
       <div className="ChooseWhat">
        <i className="achi blue-phone"> 
        <img src={bluephone} alt="Blue phone" /></i>
        <h4>Only Choose What You Need</h4>
        <p>We offer a range of home warranty plans to meet the unique needs of every homeowner. This way, you’ll only have to choose the protection you need, eliminating the need to pay for unnecessary coverage. Our team is here to help you protect you from unforeseen repairs while also saving you money on a warranty plan.</p>     
    </div>
    </>
    );
}
const Experienced = () =>{
    return(
       <>
        <div className="Experienced">
            <i className="achi blue-phone">
            <img src={bluepiggy} alt="blue call" />
            </i>
            <h4>Experienced Team</h4>
            <p>We have an experienced customer service team as well as a network of qualified partners to ensure your home repairs are completed in a timely manner and performed by a professional.</p>
       </div>
          </>
    );
   }
  const Convenience = () => {
        return(
           <>
         <div className="Convenience">
            <i className="achi blue-phone">
            <img src={bluecall} alt="blue call" />
            </i>
            <h4>Convenience</h4>
            <p>Our technicians have a wide availability and flexible schedule to ensure we can complete your repairs at a time that works best for you. We’ll work with you to find a convenient repair time.</p>
       </div>
           </>
        )
    };
    const CompanyBack = () => {
        return(
           <>
         <div className="CompanyBack">
            <i className="achi blue-phone">
            <img src={bluemarker} alt="blue marker"/>
            </i>
            <h4>A Company that Gives Back</h4>
            <p>At Acclaimed Home Warranty, we give back to the local community. A portion of all our proceeds is donated to a local cause.</p>
       </div>
           </>
        )
    };
    const Slideshow = () =>{
        return(
            <>
        <Carousel fade={true}>
            <Carousel.Item>
                <ChooseWhat/>
            </Carousel.Item>
            <Carousel.Item>
            <Experienced/>
            </Carousel.Item>
            <Carousel.Item>
            <Convenience/>
          </Carousel.Item>
            <Carousel.Item>
                <CompanyBack/>
            </Carousel.Item>
    </Carousel>
            </>
        );
    }
export{
    Experienced,
    ChooseWhat,
    Convenience,
    CompanyBack,
    Slideshow ,
}