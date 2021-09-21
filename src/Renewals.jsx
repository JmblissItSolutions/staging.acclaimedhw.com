import React, { useEffect, useState } from "react";
import APIUrl from "./Api";
import { Helmet } from "react-helmet";
import renew from "./assets/images/renew.jpg";
import renewalsbackground from "./assets/images/leackage.jpeg";
import * as ReactBootStrap from "react-bootstrap";

const Renewals = () => {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [address_or_policy_number, setAddress_or_policy_number] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [renewal_type, setRenewal_type] = useState("");
    const [additional_details, setAdditional_details] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const siteURL = (APIUrl.defaults.baseURL)

    const handleClick = () => {
        setVisible(!visible);
    };
    const [result, setResult] = useState([]);
    function submitData(e) {
        e.preventDefault();
        setLoading(true)
        let data = { first_name, last_name, address_or_policy_number, email, phone, renewal_type, additional_details }
        fetch(`${siteURL}RenewOrder`, {
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
                            top: 800,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }
                    else {
                        handleClick();
                    }
                    setLoading(false)
                })
            })
    }

    let resultMsg = (result.message)
    let res = (result.result)

    const RenewThankyou = () => (
        <>
            <div className="form-box-wrap">
                <div className="everest-forms">
                    <div className="everest-forms-notice--success">
                        Thank you for requesting more information about your renewal. A member of our renewals team will reach out to discuss.
                    </div>
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
            <div className="home_page renewals-pg">
                <div className="renew-img">
                    <img src={renew} alt="renew" />
                </div>
                <div className="container">
                    <section className="inner renewals">
                        <h1>Renewals</h1>
                        <div className="content_sec">
                            <div className="top-sec">
                                <h3>Looking to renew your policy with our company? this page is for homeowner's that currently or had a policy with acclaimed home warranty. If you are renewing from another company feel free to “chat” in we are happy to help you there.</h3>
                            </div>
                            <div className="top-option">
                                <h3>For Acclaimed policy holders, please review renewal options below.</h3>
                                <ol>
                                    <li>You can login to your account (upper right corner) and renew there</li>
                                    <li>You can chat with us M-F 8-6 MST</li>
                                    <li>You can call into 888-494-9460 dial 4 (M-F 8-6 MST)</li>
                                    <li>You can fill out this form below and we will quickly get back with you</li>
                                </ol>
                            </div>
                            <section className="video-sec claimPage" style={{ backgroundImage: `url(${renewalsbackground})`}}>
                            </section>
                            {visible == true ? <RenewThankyou /> :
                                <div className="form-box-wrap">
                                    <p className="renew-error-msg">{resultMsg}</p>
                                    {res == false ? <p className="renew-error-msg">{res}</p> : null}
                                    <div className="renew-form">
                                        <form>
                                            <label>First Name</label>
                                            <input type="text" name="first_name" value={first_name} onChange={(e) => { setFirst_name(e.target.value) }} />
                                            <label>Last Name</label>
                                            <input type="text" name="last_name" value={last_name} onChange={(e) => { setLast_name(e.target.value) }} />
                                            <label>Home address or policy number *</label>
                                            <input type="text" name="address_or_policy_number" value={address_or_policy_number} onChange={(e) =>{setAddress_or_policy_number(e.target.value) }} />
                                            <label>Email address *</label>
                                            <input type="email" name="email" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
                                            <label>Phone number *</label>
                                            <input type="text" name="phone" value={phone} onChange={(e) =>{setPhone(e.target.value)}}/>
                                            <label>Click on your option below:</label>
                                            <ul className="sel_radioval">
                                                <li><label><input type="radio" name="same_plan" value="Yes" checked={renewal_type === 'Yes'} onChange={(e) => {setRenewal_type(e.target.value)}}/>
                                                 I want to renew on the same plan & options as last year?</label></li>
                                                <li><label><input type="radio" name="other_renewal" value="No" checked={renewal_type === 'No'} onChange={(e) => {setRenewal_type(e.target.value)}}/> 
                                                 I want information on other renewal options & specials?</label></li>
                                            </ul>
                                            <div class="evf-field-description">Payment: if you choose to renew on the same plan as last year we will email you an invoice to securely pay online. Once payment is made you will receive the updated contract information to your email to securely pay online.</div>
                                            <div className="evf-frontend-row">
                                                <div className="evf-frontend-grid evf-grid-1">
                                                    <label>
                                                        <span>Anything else we can help you with today?</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <textarea value={additional_details} onChange={(e) =>{setAdditional_details(e.target.value)}}></textarea>
                                            <button type="submit" className="renew-btn" onClick={submitData}>Submit</button>
                                        </form>
                                        {isLoading == true ? <ReactBootStrap.Spinner animation="border" /> : null}
                                    </div>
                                </div>
                            }
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
};
export default Renewals;