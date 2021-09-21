import React, { useEffect, useState, Component } from "react";
import APIUrl from "../Api";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import comparebox from "../assets/images/compare-box.jpg"
import * as ReactBootStrap from "react-bootstrap";
import * as MemberAdvantageRating from "../MemberAdvantageRating";
import latticebackground from "../assets/images/lattice-background.png"

export const Texasadvantages = () => {
  const [isLoading, setLoading] = useState(false);
  const [first_name_4, setFirst_name] = useState("");
  const [last_name_4, setLast_name] = useState("");
  const [state_4, setState] = useState("");
  const [email_4, setEmail] = useState("");
  const [phone_number_4, setPhone_number] = useState("");
  const [information_4, setInformation] = useState("");
  const [showtext, setShowtext] = useState(false);

  const siteURL = (APIUrl.defaults.baseURL)

  const showmsg = () => {
    setShowtext(!showtext);
  }
  const [statelist, setStatelist] = useState([]);
  useEffect(async () => {
    const result = await APIUrl.get(`/getAllLocations`)
    setStatelist(result.data);
  }, []);
 let location_name_4 = "texas"
  const [result, setResult] = useState([]);
  function Advantageformdata(e) {
    setLoading(true);
    e.preventDefault();
    let data = { location_name_4, first_name_4, last_name_4, state_4, email_4, phone_number_4, information_4 }
    fetch(`${siteURL}Save_enquiry_texas`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((resp) => {
        resp.json().then((res) => {
          setResult(res);
          if (res.result == false) {
            window.scrollTo({
              top: 400,
              left: 0,
              behavior: 'smooth'
            })
          }
          else {
            showmsg();
          }
          setLoading(false);
        })
      })
  }
  console.log(result, 'result');
  let resultMsg = (result.message)
  let res = (result.result)
  const Thankyou = () => (
    <>
      <div className="contact_form">
        <div className="form-success">
          Thanks for contacting us! We will be in touch with you shortly.
        </div>
      </div>
    </>
  );
  return (
    <>
       <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="container">Benefits In Texas</div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="body">
                  <div className="container">
                    <div className="main-stuff">
                      <div className="advantages">
                        <h2>ADVANTAGES AVAILABLE <br></br>FOR A $65 SERVICE FEE</h2>
                        <p><strong>Re-Key Services –</strong>Change up to six locks and receive four copies of the new key.</p>
                        <p><strong>Pre-Season Tune-Ups for Heating and Air Conditioning Units –</strong>Twice a year you can get your systems cleaned and checked for the season.* Dates for A/C tune-ups are March 1–May 1. Dates for heating tune-up are September 1–December 1. $65 for the first system and $30 for additional systems.</p>
                        <p><strong>Garage Door Reprogramming –</strong>Have your keypad and remotes reprogrammed. We can also have someone check your garage door springs.</p>
                      </div>
                      <div className="services">
                        <h3>OTHER GREAT ADVANTAGES</h3>
                        <p>We’ve negotiated some great pricing for services you’ll need while enjoying your home. If you’re interested in any of the services below, just email or call us and we’ll put you in touch with the companies to get you a free quote.**</p>
                        <div className="list">
                          <div className="service">
                            Free Ring Doorbell or Next Thermostat with Home Security sign up. As low as $40 a month.
                          </div>
                          <div className="disclaimer">
                            *Not offered in all areas. Fill out the form and we will let you know which services are available near you.
                          </div>
                        </div>
                      </div>
                      <MemberAdvantageRating.TexasReview/>
                    </div>
                    <div className="sidebar">
                      <div className="form-cont" style={{ backgroundImage: `url(${latticebackground})` }}>
                        <div className="white-back">
                          <h4 className="blueText">email us</h4>
                          <p>Fill out this short form and an Acclaimed Home Warranty representative will follow up on your request.</p>
                          {
                            showtext == true ? <Thankyou /> :
                              <div className="everest-forms">
                                <p className="contact-error-msg">{resultMsg}</p>
                                {res == false ? <p className="contact-error-msg">{res}</p> : null}
                                <div className="form">
                                  <form>
                                    <label><input type="text" placeholder="FirstName*" name="FirstName" value={first_name_4} onChange={(e) => { setFirst_name(e.target.value) }} /></label>
                                    <label><input type="text" placeholder="LastName*" name="LastName" value={last_name_4} onChange={(e) => { setLast_name(e.target.value) }} /></label>
                                    <label>
                                      <select value={state_4} onChange={(e) => { setState(e.target.value) }}>
                                        {statelist.map((state) => (
                                          <option value={state.state_name} key={state.state_name}>{state.state_name}</option>
                                        ))}
                                      </select>
                                    </label>
                                    <label><input type="email" placeholder="Email*" name="email" value={email_4} onChange={(e) => { setEmail(e.target.value) }} /></label>
                                    <label><input type="text" placeholder="PhoneNumber*" name="phonenumber" value={phone_number_4} onChange={(e) => { setPhone_number(e.target.value) }} /></label>
                                    <label><textarea placeholder="Information Requested" className="field-msg" value={information_4} onChange={(e) => { setInformation(e.target.value) }}></textarea></label>
                                    <input type="submit" value="Submit" onClick={Advantageformdata} />
                                    {isLoading == true ? <ReactBootStrap.Spinner animation="border" /> : null}
                                  </form>
                                </div>
                              </div>
                          }
                        </div>
                      </div>
                      <div className="compare-box" style={{ backgroundImage: `url(${comparebox})` }}>
                        <div className="text">
                          <p className="strong">Don't Have a<br></br>Home Warranty Plan?</p>
                          <p>When purchasing a home warranty through Acclaimed, you have a partner in addressing unexpected appliance or major systems problems.</p>
                          <a href="/order-now" className="btn">Compare Texas Plans</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
    </>
  )
}