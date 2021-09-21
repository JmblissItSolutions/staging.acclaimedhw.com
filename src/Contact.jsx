import React, { useRef, useEffect, useState } from "react";
import APIUrl from "./Api";
import { Helmet } from "react-helmet";
import contactbanner from "./assets/images/contact-us-banner.png";
import * as ReactBootStrap from "react-bootstrap";

const Contact = () => {
  const [contact_name, setContact_name] = useState("");
  const [contact_phone, setContact_phone] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [contact_message, setContact_message] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showtext, setShowtext] = useState(false);

  const siteURL = (APIUrl.defaults.baseURL)

  const showmsg = () => {
    setShowtext(!showtext);
  }
  const [result, setResult] = useState([]);
  function contactData(e) {
    e.preventDefault();
    setLoading(true)
    let data = { contact_name, contact_phone, contact_email, contact_message }
    fetch(`${siteURL}ContactUs`, {
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
              top: 300,
              left: 0,
              behavior: 'smooth'
            })
          }
          else {
            showmsg();
          }
          setLoading(false)
        })
      })
  }
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
      <Helmet>
        <title>Contact Acclaimed Home Warranty Team in one of our offices: Utah, Arizona, Idaho, Texas, or Nevada</title>
        <meta name="description" content="For all your home warranty needs, concerns and questions, reach out to the Acclaimed Home Warranty’s team." />
      </Helmet>
      <div className="home_page contact-pg">
        <div className="top_img">
          <img src={contactbanner} alt="contactbanner" />
        </div>
        <h1 className="contact-text">Contact Us</h1>
        <section className="inner contact">
          <p>Have a question about our products and services?&nbsp;Fill out this short form and an Acclaimed Home Warranty representative will follow up on your request.</p>
          <p>&nbsp;</p>
          <div className="container">
            {
              showtext == true ? <Thankyou /> :
                <div className="contact_form">
                  <p className="contact-error-msg">{resultMsg}</p>
                  {res == false ? <p className="contact-error-msg">{res}</p> : null}&nbsp;
                  <form>
                    <input type="text" placeholder="Name" name="contact_name" value={contact_name} onChange={(e) => { setContact_name(e.target.value) }} />
                    <input type="text" placeholder="Phone number" name="contact_phone" value={contact_phone} onChange={(e) => { setContact_phone(e.target.value) }} />
                    <input type="email" placeholder="Email" name="contact_email" value={contact_email} onChange={(e) => { setContact_email(e.target.value) }} />
                    <textarea placeholder="Message" className="field-msg" value={contact_message} onChange={(e) => { setContact_message(e.target.value) }} className="contact-textarea"></textarea>
                    <button type="submit" className="contact-btn" onClick={contactData}>Submit</button>
                  </form>
                </div>
            }
            {isLoading == true ? <ReactBootStrap.Spinner animation="border" /> : null}
          </div>
        </section>
      </div>
    </>
  )
};
export default Contact;