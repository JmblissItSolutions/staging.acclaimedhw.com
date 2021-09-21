import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import APIUrl from "./Api"
import Slider from "./component/Homeslider";
import { ChooseWhat, Experienced, Convenience, CompanyBack, Slideshow } from "./component/WhyChooseUs";
import { Fasterfixes, Numerousplan, ResponsiveCustomer, LocallyOwned, AdvantageSlideshow } from "./component/AdvantagesWarranty";
import Popup from 'reactjs-popup';
import { Helmet } from "react-helmet";
import 'reactjs-popup/dist/index.css';
import leackage from "./assets/images/leackage.jpeg";
import playicon from "./assets/images/play-icon.png";
import homeperfect from "./assets/images/home-perfect-bg.png";
import comparedoor from "./assets/images/compare-door-bg.png";

const Home = () => {
  const rep = (APIUrl.defaults.assetsURL)
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await APIUrl.get(`/get_holocations`)
    setData(result.data);
  }, []);
  const history = useHistory();
  const ContactClick = () => {
    history.push("/contact-us");
}

  return (
    <>
      <Helmet>
        <title>Acclaimed Home Warranty | Utah, Nevada, Texas, Arizona, and Idaho : Acclaimed Home Warranty</title>
        <meta name="description" content="Acclaimed Home Warranty offers coverage plans in five states, with several coverage upgrades to meet homeowner needs. " />
      </Helmet>
      <div className="home_page">
        <div className="banner">
          <Slider />
          <div className="inner-bnr container">
            <div className="info-box">
              <p>We offer competitive prices for everyone who wants to make a home more secure.</p>
              {/* <div className="btn-cont">
                <a href="/homeowner-plans/arizona" className="btn home">Current Homeowner<br />See Options</a>
                <a href="/real-estate-orders/" className="btn">Title Company &amp;<br />Real Estate Transactions</a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home">
            <h1>Find the Perfect Home Warranty Plan for You</h1>
            <h3>Acclaimed Home Warranty Helps You Protect Your Home</h3>
            <div className="flex-container">
              <div className="box">
                <h4>REAL ESTATE ORDERS</h4>
                <p>Whether you are a real estate agent, title officer, mortgage lender or purchasing a home we have great plans and coverages to choose from.</p>
                <p><a href="/real-estate-orders/">Click here</a> to see your options and to easily order. Invoices will be provided to send a check to at the end of the order.</p>
                <p>If you need to pay another way, please order and email <a>hello@acclaimedhw.com</a> or chat in for payment options.</p>
                <p>Thank you for your business. </p>
                </div>
              <div className="box">
                <h4>EXISTING HOMEOWNERS or RENTALS</h4>
                <p>If you are currently living in your home, have a second home or a long-term rental, Acclaimed is here to help.</p>
                <p><a href="/real-estate-orders/">Click here</a> to see your options and to easily order & pay online.</p>
                <p>If you have questions, please feel free to chat in or email <a>hello@acclaimedhw.com</a></p>
                <p>We look forward to taking care of you. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home_wrranty">
          <div className="container">
            <h1>Why Choose Us</h1>
            <p>When choosing a home warranty company, you want to be sure you’ll have options to meet your needs and a team you can trust. Acclaimed Home Warranty will ensure all your most important appliances are protected and will be repaired by an experienced team of technicians from one of our qualifiedpartners. You’ll receive numerous member advantages with a warranty plan from us. We’re the team to choose for your home warranty protections for the following reasons:</p>
            <div className="inner_slider">
              <div className="reason">
                <ChooseWhat/>
              </div>
              <div className="reason">
                <Experienced/>
              </div>
              <div className="reason">
                <Convenience/>
              </div>
              <div className="reason">
                <CompanyBack/>
              </div>
            </div>
            <div className="slidershow mobile-slide">
              <Slideshow />
            </div>
          </div>
        </div>
        <div className="home_advantage">
          <div className="container">
            <h1>Advantages of Choosing Our Warranty Plans</h1>
            <p>At Acclaimed Home Warranty, we offer numerous home warranty options, including options forreal estateproperties about to hit the market, as well as for new homeowners. Our warranty plans provide many advantages, including:</p>
            <div className="inner_reason">
              <div className="advantage_reason">
                <Fasterfixes />
              </div>
              <div className="advantage_reason">
                <Numerousplan />
              </div>
            </div>
            <div className="inner_reason">
              <div className="advantage_reason">
                <ResponsiveCustomer />
              </div>
              <div className="advantage_reason">
                <LocallyOwned />
              </div>
            </div>
            <div className="advantageslidershow mobile-slide">
              <AdvantageSlideshow />
            </div>
          </div>
          <section className="video-sec claimPage" style={{ backgroundImage: `url(${leackage})` }}>
            <div className="container">
              <h1><small>Why Choose</small> Acclaimed Home Warranty?</h1>
              <div className="img-pop">
                <Popup trigger={<button className="play-btn"><img src={playicon} alt="playicon" /> </button>} modal nested>
                  {close => (
                    <div className="modalclaim">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="content">
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/1mzkbJSIMHc"></iframe>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </section>
          <section id="home-perfect-plan" style={{ backgroundImage: `url(${homeperfect})` }}>
            <div className="plans" style={{ backgroundImage: `url(${comparedoor})` }}>
              <div className="inner">
                {data.map(item => (
                  <div className="col-3" key={item.id} style={{ backgroundImage: `url(${rep}/${item.image})` }}>
                    <div className="perfect-cta">
                      <span className="perfect-cta__compare cormor">Compare</span>
                      <span className="perfect-cta__state">{item.location_name}</span>
                      <span className="perfect-cta__plans">Plans</span>
                    </div>
                    <div className="btn-cont">
                      <a href={'/homeowner-plans/' + item.slug} className="btn">compare homeowner&nbsp;plans</a>
                      <a href="/real-estate-orders/" className="btn">compare real estate&nbsp;plans&nbsp;</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          <div className="container">
            <div className="contact_con">
              <h3>Contact Acclaimed Home Warranty</h3>
              <p>If you’re looking for the best home warranty company, you’ve come to the right place. Acclaimed Home Warranty can provide the coverage you need at an affordable price. Please contact us today to learn more about our plan options!</p>
              <button className="con_btn" onClick={ContactClick}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default Home;
