import React, { useRef, useEffect, useState } from "react";
import APIUrl from "./Api";
import { Helmet } from "react-helmet";
import contractorbg from "./assets/images/Contractorbg.png";
import blueleads from "./assets/images/blue-leads.png";
import blueadvertising from "./assets/images/blue-advertising.png";
import blueform from "./assets/images/blue-form.png";
import bluegraph from "./assets/images/blue-graph.png";
import Carousel from 'react-bootstrap/Carousel';
import silverstarelectirc from "./assets/images/silverstarelectric.jpg";
import asiszservices from "./assets/images/asiszservices.png";
import latticebackground from "./assets/images/lattice-background.png";
import { Collapse } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
import * as ReactBootStrap from "react-bootstrap";

const Contractors = () => {
  const [isLoading, setLoading] = useState(false);
  const { Panel } = Collapse;
  const [company_name, setCompany_name] = useState("");
  const [contact_name, setContact_name] = useState("");
  const [contact_number, setContact_number] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [hourly_rate, setHourly_rate] = useState("");
  const [other, setOther] = useState("");
  const [showtext, setShowtext] = useState(false);

  const siteURL = (APIUrl.defaults.baseURL)

  const showmsg = () => {
    setShowtext(!showtext);
  }
  const tradeserlist = [
    { "name": "Appliance" },
    { "name": "HVAC" },
    { "name": "Plumbing" },
    { "name": "Septic" },
    { "name": "Pool/Spa" },
    { "name": "Roof" },
    { "name": "Electrical" },
    { "name": "Garage Systems" },
    { "name": "Water Softener" },
    { "name": "Other" }
  ]
  const serarealist = [
    { "name": "Utah" },
    { "name": "Nevada" },
    { "name": "Texas" },
    { "name": "Arizona" },
    { "name": "Idaho" }
  ]

  const [tradservices, setTradeservices] = useState([]);
  const tred = tradservices.join(', ')
  const trade_services = tred.toString();
  function TradeserList(c) {
    const trad = tradservices.indexOf(c);
    const all = [...tradservices];
    if (trad == -1) {
      all.push(c);
    } else {
      all.splice(trad, 1);
    }
    setTradeservices(all);
  };

  const [serarea, setSerarea] = useState([]);
  const servicearea = serarea.join(', ')
  const service_areas = servicearea.toString();
  function ServiceareaList(c) {
    const area = serarea.indexOf(c);
    const all = [...serarea];
    if (area == -1) {
      all.push(c);
    } else {
      all.splice(area, 1);
    }
    setSerarea(all);
  };

  const [result, setResult] = useState([]);
  function contractorData(e) {
    setLoading(true);
    e.preventDefault();
    let data = { company_name, contact_name, contact_number, contact_email, trade_services, service_areas, hourly_rate, other }
    fetch(`${siteURL}ContractorApplication`, {
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
      <Helmet>
        <title>Join Acclaimed Home Warranty Team as Contractors, coverage area for five Western US States</title>
        <meta name="description" content="Join Acclaimed Home Warranty Team as Contractors, coverage area for five Western US States" />
      </Helmet>
      <div className="home_page contractor-pg">
        <div className="top_img">
          <img src={contractorbg} alt="contractorbg" />
        </div>
        <div className="contrc-text">
          <h1>Acclaimed Contractors</h1>
          <p>Being part of the Acclaimed Home Warranty team means making our clients feel secure in every aspect of their home. We only work with the best contractors, so if you never settle for anything less than exceptional service, we want to hear from you.</p>
        </div>
        <section className="dual-color clear">
          <section className="why-join">
            <div className="inner">
              <div className="ahw-pull-left">
                <h2>why join our team?</h2>
                <div className="icon-cont">
                  <p><i className="achi blue-leads"><img src={blueleads} alt="free-leads" /></i>free leads</p>
                  <p><i className="achi blue-advertising"><img src={blueadvertising} alt="free-advertising" /></i>free advertising</p>
                  <p><i className="achi blue-graph"><img src={bluegraph} alt="free-graph" /></i>steady business</p>
                  <p><i className="achi blue-form"><img src={blueform} alt="free-form" /></i>customer feedback</p>
                </div>
              </div>
            </div>
          </section>
          <section className="reviews">
            <div className="inner">
              <div className="ahw-pull-left">
                <Carousel>
                  <Carousel.Item>
                    <div className="testimonial-slider slick-initialized slick-slider slick-dotted">
                      <div className="slick-list draggable">
                        <div className="slick-track">
                          <div className="img-cont">
                            <img src={silverstarelectirc} alt="SilverStar Electric" />
                          </div>
                          <Carousel.Caption>
                            <div className="text-cont">
                              <p><strong>SilverStar Electric</strong>| Jake Harris</p>
                              <p>""Our experience with Acclaimed always gives excellent communication, allowing us to do our job fast and efficiently. In all aspects of our business with Acclaimed, from start to finish, they are easy to work with. I'd also like to note that Acclaimed also pays invoices in a timely manner. We love working with Acclaimed Home Warranty and hope to continue a long business relationship.
                                Thanks again for the opportunity to work with you.""</p>
                            </div>
                          </Carousel.Caption>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="testimonial-slider slick-initialized slick-slider slick-dotted">
                      <div className="slick-list draggable">
                        <div className="slick-track">
                          <div className="img-cont">
                            <img src={asiszservices} alt="asiszservices" />
                          </div>
                          <Carousel.Caption>
                            <div className="text-cont">
                              <p><strong>As Isz Services</strong>|Shane</p>
                              <p>"“Working with Acclaimed home warranty is great. The organization is very professionally and truly cares about its customers. They want the best contractors they can find to make sure they are delivering the best to their customers. Acclaimed Home Warranty is hands down, a top notch organization.”"</p>
                            </div>
                          </Carousel.Caption>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </section>
          <section className="form-cont" style={{ backgroundImage: `url(${latticebackground})` }}>
            <div className="white-back">
              <h4 className="blueText">How do I join?</h4>
              <p>We want to make sure you’re a great fit for our team. Fill out this application and we’ll reach out to you to learn more about your organization.</p>
              {
                showtext == true ? <Thankyou /> :
                  <div className="everest-forms">
                    <p className="contact-error-msg">{resultMsg}</p>
                    {res == false ? <p className="contact-error-msg">{res}</p> : null}
                    <div className="form">
                      <form>
                        <label><input type="text" placeholder="Company Name*" name="company_name" value={company_name} onChange={(e) => { setCompany_name(e.target.value) }} /></label>
                        <label><input type="text" placeholder="Contact Name*" name="contact_name" value={contact_name} onChange={(e) => { setContact_name(e.target.value) }} /></label>
                        <label><input type="text" placeholder="Contact Number*" name="contact_number" value={contact_number} onChange={(e) => { setContact_number(e.target.value) }} /></label>
                        <label><input type="text" placeholder="Contact Email*" name="contact_email" value={contact_email} onChange={(e) => { setContact_email(e.target.value) }} /></label>
                        <label>
                          <Collapse
                            bordered={true}
                            defaultActiveKey={['']}
                            expandIcon={({ isActive }) => <CaretLeftOutlined rotate={isActive ? 90 : 0} />}
                            className="site-collapse-custom-collapse"
                          >
                            <Panel header="Trade Services" key="1" className="site-collapse-custom-panel">
                              <div className="trade_service">
                                {tradeserlist.map((c, i) => (
                                  <li key={i} className="list-unstyled">
                                    <label className="form-check-label">
                                      <input onChange={event => TradeserList(c.name, c)}
                                        type="checkbox" value={c.name} className="trade_list" />
                                      {c.name}</label>
                                  </li>
                                ))}
                                {tradservices.includes('Other') ?
                                  <div className="otherField">
                                    <label><span>Other</span></label>
                                    <input type="text" value={other} onChange={(e) => { setOther(e.target.value) }} />
                                  </div>
                                  : null}
                              </div>
                            </Panel>
                          </Collapse>
                        </label>
                        <label>
                          <Collapse
                            bordered={true}
                            defaultActiveKey={['']}
                            expandIcon={({ isActive }) => <CaretLeftOutlined rotate={isActive ? 90 : 0} />}
                            className="site-collapse-custom-collapse"
                          >
                            <Panel header="Services Areas" key="1" className="site-collapse-custom-panel">
                              <div className="service_area">
                                {serarealist.map((c, i) => (
                                  <li key={i} className="list-unstyled">
                                    <label className="form-check-label">
                                      <input onChange={event => ServiceareaList(c.name, c)}
                                        type="checkbox" value={c.name} className="ser_list" />
                                      {c.name}</label>
                                  </li>
                                ))}
                              </div>
                            </Panel>
                          </Collapse>
                        </label>
                        <label><input type="number" placeholder="Hourly Rate*" name="hourly_rate" value={hourly_rate} onChange={(e) => { setHourly_rate(e.target.value) }} /></label>
                        <input type="submit" value="SUBMIT APPLICATION" onClick={contractorData} />
                        {isLoading == true ? <ReactBootStrap.Spinner animation="border" /> : null}
                      </form>
                    </div>
                  </div>
              }
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
export default Contractors;