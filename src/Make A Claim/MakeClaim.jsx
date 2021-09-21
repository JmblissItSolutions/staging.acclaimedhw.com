import React, { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import APIUrl from "../Api";
import MakeAClaim from "../assets/images/MakeAClaim.png";
import leackage from "../assets/images/leackage.jpeg"
import playicon from "../assets/images/play-icon.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Helmet } from "react-helmet";
import * as ReactBootStrap from "react-bootstrap";

const MakeClaim = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [street_address, setStreet_address] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [emergency, setEmergency] = useState("");
  const [claim_details, setClaim_details] = useState("");
  const [appliances, setAppliances] = useState("");
  const [other, setOther] = useState("");
  const [other_appliances, setother_appliances] = useState("");
  const [isLoading, setLoading] = useState(false);

  const siteURL = (APIUrl.defaults.baseURL)

  const conmethodlist = [
    { "name": "Phone" },
    { "name": "Email" },
    { "name": "Text" }]
  const appliaceslist = [
    { "name": "Electrician" },
    { "name": "Plumber" },
    { "name": "Appliance Technician" },
    { "name": "Other" }]

  const [statelist, setStatelist] = useState([]);
  useEffect(async () => {
    const result = await APIUrl.get(`/getAllLocations`)
    setStatelist(result.data);
  }, []);

  const [applist, setApplist] = useState([]);
  useEffect(async () => {
    const result = await APIUrl.get(`/getAppliancesTypes`)
    setApplist(result.data);
  }, []);

  const [checked, setChecked] = useState([]);
  const cont_method = checked.join(', ')
  const contact_method = cont_method.toString();

  function handleToggle(c) {
    const conmethod = checked.indexOf(c);
    const all = [...checked];
    if (conmethod == -1) {
      all.push(c);
    } else {
      all.splice(conmethod, 1);
    }
    setChecked(all);
  };

  const [techlist, setTechnicians] = useState([]);
  const applience = techlist.join(',')
  const technicians = applience.toString();

  function AppliceList(c) {
    const conmethod = techlist.indexOf(c);
    const all = [...techlist];
    if (conmethod == -1) {
      all.push(c);
    } else {
      all.splice(conmethod, 1);
    }
    setTechnicians(all);
  };
  const selappliace = event => {
    setAppliances(event.target.value);
  };
  function RedirectInvoice() {
    history.push("/make-a-claim/claim-submission")
  }

  const [result, setResult] = useState([]);
  function claimData(e) {
    e.preventDefault();
    setLoading(true)
    let data = { name, phone, email, street_address, city, state, zip_code, emergency, contact_method, technicians, claim_details, appliances, other, other_appliances }
    fetch(`${siteURL}MakeaClaim`, {
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
              top: 600,
              left: 0,
              behavior: 'smooth'
            })
          }
          else {
            RedirectInvoice();
          }
          if (res.result == true) {
            setResult(res);
          }
          setLoading(false)
        })
      })
  }

  let resultMsg = (result.message)
  let res = (result.result)

  return (
    <>
      <Helmet>
        <title>File a Home Warranty Claim for Your Property</title>
        <meta name="description" content="File a Claim for your home warranty with Acclaimed Home Warranty, service providers in Utah, Texas, Arizona, Idaho, and Nevada. " />
      </Helmet>
      <div className="home_page makeclaim-pg">
        <div className="top_img">
          <img src={MakeAClaim} alt="MakeClaim" />
        </div>
        <div className="container">
          <div className="upper">
            <h1>make a claim</h1>
            <h4 className="sub-txt">For the fastest service, please call us at <a href="tel:888-494-9460">888-494-9460</a>&nbsp;during business hours.</h4>
          </div>
          <div class="flex-container">
            <div class="box">
              <h4>What To Expect:</h4>
              <p>Once your request has been received by our team members they will be in touch. Please make sure your emails and phone numbers are correct for contact.</p>
              <p>After your claim has been processed, a contractor will be assigned and will call you to schedule. You also will receive an email with their information. You are welcome to call them to schedule for faster service. The services will be initiated under normal circumstances within 24- 48 hours (minus holidays) of your service request to AHW. In cases of emergency, we will make reasonable efforts to expedite service calls within 24 hours.</p>
            </div>
            <div class="box">
              <h4>What Is Considered An Emergency?</h4>
              <p>An emergency situation is defined as a failure of a covered item resulting in 1) a condition that immediately endangers health and safety; 2) a system failure that is causing ongoing damage to the home; 3) plumbing failure that causes interior leaking; and 4) a complete loss of heat or air conditioning in extreme temperatures.</p>
              <p><em>*AHW shall not be held liable for any damage or injury caused by any failure or delay in providing repair service. AHW will accept your request to expedite scheduling of a non-emergency service when a service contractor is available, however, you will be responsible for payment of additional fees, including overtime.</em></p>
            </div>
          </div>
          <div className="inner">
            <section className="video-sec claimPage" style={{ backgroundImage: `url(${leackage})` }}>
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
            </section>
          </div>
          <div className="form-box-wrap">
            <h6>Otherwise, please tell us about the issue(s) by filling out the form below a service fee will be required.</h6>
            <p className="contact-error-msg">{resultMsg}</p>
            {res == false ? <p className="contact-error-msg">{res}</p> : null}
            <div className="form">
              <form>
                <label><input type="text" placeholder="Name*" name="name" value={name} onChange={(e) => { setName(e.target.value) }} /></label>
                <label><input type="text" placeholder="Phone number*" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} /></label>
                <label><input type="email" placeholder="Email*" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /></label>
                <label><input type="text" placeholder="StreetAdress*" name="street_address" value={street_address} onChange={(e) => { setStreet_address(e.target.value) }} /></label>
                <label><input type="text" placeholder="City*" name="city" value={city} onChange={(e) => { setCity(e.target.value) }} /></label>
                <label>
                  <select value={state} onChange={(e) => { setState(e.target.value) }}>
                    {statelist.map((state) => (
                      <option value={state.state_name} key={state.state_name}>{state.state_name}</option>
                    ))}
                  </select>
                </label>
                <label><input type="number" placeholder="Zip-Code*" name="zip_code" value={zip_code} onChange={(e) => { setZip_code(e.target.value) }} /></label>
                <label><textarea placeholder="please explain the detailes of your" className="field-msg" name="claim_details" value={claim_details} onChange={(e) => { setClaim_details(e.target.value) }}  ></textarea></label>
                <label><span>Is this an emergency?*</span></label>
                <label><input type="radio" value="Male" name="gender" onChange={(e) => { setEmergency(e.target.value) }} />No, this is not an emergency</label>
                <label><input type="radio" value="Female" name="gender" onChange={(e) => { setEmergency(e.target.value) }} /> Yes, this is an emergency</label>
                <label><span>Preferred Contact Method*</span></label>
                <div className="con_method">
                  {conmethodlist.map((c, i) => (
                    <li key={i} className="list-unstyled">
                      <label className="form-check-label">
                        <input
                          onChange={event => handleToggle(c.name, c)}
                          type="checkbox"
                          value={c.name}
                          className="con_list"
                        />
                        {c.name}</label>
                    </li>
                  ))}
                </div>
                <label><span>Type of Technician(s) Required*</span></label>
                <div className="con_appliaces">
                  {appliaceslist.map((c, i) => (
                    <li key={i} className="list-unstyled">
                      <label className="form-check-label">
                        <input
                          onChange={event => AppliceList(c.name, c)}
                          type="checkbox"
                          value={c.name}
                          className="con_list"
                        />
                        {c.name}</label>
                    </li>
                  ))}
                </div>
                {techlist.includes('Other') ?
                  <div className="otherField">
                    <label><span>Other</span></label>
                    <input type="text" value={other} onChange={(e) => { setOther(e.target.value) }} />
                  </div>
                  : null}
                {techlist.includes('Appliance Technician') ?
                  <div className="appliance_field">
                    <label><span>Types of Appliances</span></label>
                    <select value={appliances} onChange={selappliace}>
                      {applist.map((ind) => (
                        <option value={ind.type_name} key={ind.id}>{ind.type_name}</option>
                      ))}
                    </select>
                  </div>
                  : null}
                {appliances == "Other" ?
                  <div className="otherField">
                    <label><span>Other</span></label>
                    <input type="text" value={other_appliances} onChange={(e) => { setother_appliances(e.target.value) }} />
                  </div>
                  : null}
              </form>
              <button type="submit" className="make-btn" onClick={claimData}>Submit</button>
              {isLoading == true ? <ReactBootStrap.Spinner animation="border" /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default MakeClaim;