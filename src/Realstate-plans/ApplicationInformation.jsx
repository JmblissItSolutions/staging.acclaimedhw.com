import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from "react-helmet";
import APIUrl from "../Api"
import { TiChevronLeft } from 'react-icons/ti';
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";

const ApplicationInformation = ({ coverage, calamount, selectedCard, parentCallback }) => {
    const [prop_street1, SetProp_Street1] = useState("");
    const [prop_street2, SetProp_Street2] = useState("");
    const [prop_city, SetProp_City] = useState("");
    const [prop_state, SetProp_state] = useState("");
    const [prop_zipcode, SetProp_zipcode] = useState("");
    const [buyer_name, SetBuyer_name] = useState("");
    const [buyer_phone, SetBuyer_phone] = useState("");
    const [buyer_email, SetBuyer_email] = useState("");
    const [buyer_agentname, SetBuyer_agentname] = useState("");
    const [buyer_agentphone, SetBuyer_agentphone] = useState("");
    const [buyer_agentemail, SetBuyer_agentemail] = useState("");
    const [buyer_realstate_company, SetBuyer_realstate_company] = useState("");
    const [buyer_coordinatorname, SetBuyer_coordinatorname] = useState("");
    const [buyer_coordinatorphone, SetBuyer_coordinatorphone] = useState("");
    const [buyer_coordinatoremail, SetBuyer_coordinatoremail] = useState("");
    const [seller_name, SetSeller_name] = useState("");
    const [seller_phone, SetSeller_phone] = useState("");
    const [seller_email, SetSeller_email] = useState("");
    const [seller_agentname, SetSeller_agentname] = useState("");
    const [seller_agentphone, SetSeller_agentphone] = useState("");
    const [seller_agentemail, SetSeller_agentemail] = useState("");
    const [seller_realstate_company, SetSeller_realstate_company] = useState("");
    const [seller_coordinatorname, SetSeller_coordinatorname] = useState("");
    const [seller_coordinatorphone, SetSeller_coordinatorphone] = useState("");
    const [seller_coordinatoremail, SetSeller_coordinatoremail] = useState("");
    const [escrow_title, SetEscrow_title] = useState("");
    const [escrow_street1, SetEscrow_street1] = useState("");
    const [escrow_street2, SetEscrow_street2] = useState("");
    const [escrow_city, SetEscrow_city] = useState("");
    const [escrow_state, SetEscrow_state] = useState("");
    const [escrow_zipcode, SetEscrow_zipcode] = useState("");
    const [closing_officername, SetClosing_officername] = useState("");
    const [closing_officeremail, SetClosing_officeremail] = useState("");
    const [closing_officerphone, SetClosing_officerphone] = useState("");
    const [closing_date, SetClosing_date] = useState("");
    const [escrow_assistantname, SetEscrow_assistantname] = useState("");
    const [escrow_assistantemail, SetEscrow_assistantemail] = useState("");
    const [order_biller, SetOrder_biller] = useState("");
    const [order_notes, SetOrder_notes] = useState("");
    const [sales_person, SetSales_person] = useState("");
    const [coupon_code, SetCoupon_code] = useState("");
    const [total_price, setTotal_price] = useState(calamount);
    const [Bills, setBills] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [savorder, setSavOrder] = useState([]);
    const [no_buyer_agent, setNobuyer] = useState(false);
    const [no_seller_agent, setNoseller] = useState(false);

    const siteURL = (APIUrl.defaults.baseURL)

    let p_location_id = localStorage.getItem('stateid');
    let p_coverage_type_id = localStorage.getItem('coverageid');
    let p_property_type_id = localStorage.getItem('propid');
    let i_am_the = localStorage.getItem('iam');
    let creditamnt = localStorage.getItem('creditamnt')
    let credit_balance = creditamnt ? localStorage.getItem('creditamnt') : localStorage.getItem('remainblnc')


    const [cponcode, setcpon] = useState([]);
    function saveCoupon() {
        let data = { coupon_code }
        fetch(`${siteURL}CheckRealCouponExist`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                resp.json().then((res) => {
                    setcpon(res);
                    if (res.result == false) {
                        const answer =  window.confirm("The coupon entered is invalid or has expired. Would you like to continue with your order?")
                        if (answer) {
                            console.log("Ok");
                            return SetCoupon_code("")
                          } else {
                            console.log("cancel");
                            return SetCoupon_code("")
                          } 
                    }
                })
            })
    }
    // console.log(cponcode)
    let coupres = cponcode.result
    // console.log(coupres)


    function saveOrder(e) {
        saveCoupon()
        e.preventDefault();
        setLoading(true)
        let data = { p_location_id, p_coverage_type_id, p_property_type_id, prop_street1, prop_street2, prop_city, prop_state, prop_zipcode, buyer_name, buyer_phone, buyer_email, buyer_agentname, no_buyer_agent, buyer_agentphone, buyer_agentemail, buyer_realstate_company, buyer_coordinatorname, buyer_coordinatorphone, buyer_coordinatoremail, seller_name, seller_phone, seller_email, seller_agentname, no_seller_agent, seller_agentphone, seller_agentemail, seller_realstate_company, seller_coordinatorname, seller_coordinatorphone, seller_coordinatoremail, escrow_title, escrow_street1, escrow_street2, escrow_city, escrow_state, escrow_zipcode, closing_officername, closing_officeremail, closing_officerphone, closing_date, escrow_assistantname, escrow_assistantemail, order_biller, order_notes, sales_person, coupon_code, total_price, credit_balance, i_am_the }
        fetch(`${siteURL}SaveRealestateOrder`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                resp.json().then((res) => {
                    setSavOrder(res);
                    if (res.result == false) {
                        window.scrollTo({
                            top: 30,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }
                    if (res.result == true ) {
                     parentCallback(res.order_id);
                    }
                    setLoading(false)
                })
            })
    }

    let res = savorder.result
    let msg = savorder.message
    const orderid = savorder.order_id
    function GoBack() {
        parentCallback('GoBack');
    }
    let mainprodata = [];
    mainprodata.push(selectedCard);

    const mainOrd = mainprodata.map(item => {
        let orderid = "order_id"
        let product_id = "product_id"
        let product_name = "product_name"
        let prod_type = "prod_type"
        let quantity = "quantity"
        let price = "price"
        const container = {};
        container[orderid] = savorder.order_id
        container[product_id] = item.id
        container[product_name] = item.name
        container[prod_type] = "plan"
        container[quantity] = 1
        container[price] = item.price
        return container;
    })

    function getArray() {
        if (coverage) {
            return coverage
        } else {
            return coverage = []
        }
    }
    let arr = getArray()
    const OrdList = coverage.filter(person =>
        person.quantity > 0).map(item => {
            let orderid = "order_id"
            let product_id = "product_id"
            let product_name = "product_name"
            let prod_type = "prod_type"
            let price = "price"
            let quantity = "quantity"
            const container = {};
            container[orderid] = savorder.order_id
            container[product_id] = item.id
            container[product_name] = item.coverage_name
            container[prod_type] = "addon"
            container[price] = item.coverage_price
            container[quantity] = item.quantity
            return container;
        })

    if (mainOrd && mainOrd.length) {
        OrdList.push(mainOrd[0]);
    }
    const [productlist, setProductlist] = useState([]);
    function saveProduct() {
        fetch(`${siteURL}Saverealorderitems`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(OrdList)
        })
            .then((resp) => {
                resp.json().then((productlist) => {
                    if (res == true) {
                        setProductlist(productlist);
                    }
                })
            })
        let res = false
    }

    const fetchBill = async () => {
        const Bill = await APIUrl.get(`/get_user_types`)
        const realValue = Bill.data.user_types
        setBills(realValue);
    }
    useEffect(() => {
        fetchBill()
        saveProduct()
    }, [orderid]);


    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            <div className="home_page">
                <div className="container">
                    <div className="app_form">
                        <h2>Application Information</h2>
                        <button type="button" className="btn" onClick={GoBack}><TiChevronLeft />GO BACK</button>
                    </div>
                    <form>
                        <div className="appForm__child">
                            <p className="error-msg">{msg}</p>
                            {res == false ? <p className="error-msg">{res}</p> : null}
                            <h4>Property's Address</h4>
                            <div className="appForm__flex">
                                <div className="appForm__field two-thirds">
                                    <label>Street Address*</label>
                                    <input type="text" name="propertyAddress" placeholder="Street Address*" value={prop_street1} onChange={(e) => { SetProp_Street1(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Unit Number</label>
                                    <input type="text" placeholder="Unit #" value={prop_street2} onChange={(e) => { SetProp_Street2(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>City*</label>
                                    <input type="text" name="propertyCity" placeholder="City*" value={prop_city} onChange={(e) => { SetProp_City(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>State*</label>
                                    <input type="text" name="propertyCity" placeholder="State*" value={prop_state} onChange={(e) => { SetProp_state(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Zip Code*</label>
                                    <input type="text" name="propertyCity" placeholder="Zip Code*" value={prop_zipcode} onChange={(e) => { SetProp_zipcode(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        { p_coverage_type_id == 1 ?
                        <div className="appForm__child">
                            <h4>Buyer's Information</h4>
                            <div className="appForm__flex">
                                <div className="appForm__field third">
                                    <label>Buyer's Name*</label>
                                    <input type="text" name="buyerName" placeholder="Buyer's Name*" value={buyer_name} onChange={(e) => { SetBuyer_name(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Buyer's Phone*</label>
                                    <input type="tel" name="buyerPhone" placeholder="Buyer's Phone*" value={buyer_phone} onChange={(e) => { SetBuyer_phone(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Buyer's Email</label>
                                    <input type="email" placeholder="Buyer's Email" value={buyer_email} onChange={(e) => { SetBuyer_email(e.target.value) }} />
                                </div>
                                {no_buyer_agent ?
                                    <div className="appForm__field two-thirds">
                                        <input type="text" placeholder="No Buyer's Agent Name" value="" disabled />
                                    </div> :
                                    <div className="appForm__field two-thirds">
                                        <label>Buyer's Agent Name*</label>
                                        <input type="text" placeholder="Buyer's Agent Name*" value={buyer_agentname} onChange={(e) => { SetBuyer_agentname(e.target.value) }} />
                                    </div>
                                }
                                <div className="appForm__field third has-checkbox">
                                    <input type="checkbox" name="application.buyer.agent.name" placeholder="Buyer's Agent Name*" onChange={(e) => setNobuyer(!no_buyer_agent)} />
                                    <label>No Buyer's Agent Name</label>
                                </div>
                                <div className="appForm__field third">
                                    <label>Buyer's Agent Phone</label>
                                    <input type="text" placeholder="Buyer's Agent Phone" value={buyer_agentphone} onChange={(e) => { SetBuyer_agentphone(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Buyer's Agent Email</label>
                                    <input type="email" placeholder="Buyer's Agent Email" value={buyer_agentemail} onChange={(e) => { SetBuyer_agentemail(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Real Estate Company</label>
                                    <input type="text" placeholder="Real Estate Company" value={buyer_realstate_company} onChange={(e) => { SetBuyer_realstate_company(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Assistant/Transaction Coordinator's Name</label>
                                    <input type="text" placeholder="Assistant/Transaction Coordinator's Name" value={buyer_coordinatorname} onChange={(e) => { SetBuyer_coordinatorname(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Assistant/Transaction Coordinator's Phone</label>
                                    <input type="tel" placeholder="Assistant/Transaction Coordinator's Phone" value={buyer_coordinatorphone} onChange={(e) => { SetBuyer_coordinatorphone(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Assistant/Transaction Coordinator's Email</label>
                                    <input type="email" placeholder="Assistant/Transaction Coordinator's Email" value={buyer_coordinatoremail} onChange={(e) => { SetBuyer_coordinatoremail(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                         : null }
                        <div className="appForm__child">
                            <h4>Seller's Information</h4>
                            <div className="appForm__flex">
                                <div className="appForm__field third">
                                    <label>Seller's Name</label>
                                    <input type="text" placeholder="Seller's Name" value={seller_name} onChange={(e) => { SetSeller_name(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Seller's Phone</label>
                                    <input type="tel" placeholder="Seller's Phone" value={seller_phone} onChange={(e) => { SetSeller_phone(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Seller's Email</label>
                                    <input type="email" placeholder="Seller's Email" value={seller_email} onChange={(e) => { SetSeller_email(e.target.value) }} />
                                </div>
                                {no_seller_agent ?
                                    <div className="appForm__field two-thirds">
                                        <input type="text" placeholder="No Seller's Agent Name" disabled value="" />
                                    </div> :
                                    <div className="appForm__field two-thirds">
                                        <label>Seller's Agent Name*</label>
                                        <input type="text" placeholder="Seller's Agent Name*" value={seller_agentname} onChange={(e) => { SetSeller_agentname(e.target.value) }} />
                                    </div>
                                }
                                <div className="appForm__field third has-checkbox">
                                    <input type="checkbox" onChange={(e) => setNoseller(!no_seller_agent)} />
                                    <label>No Seller's Agent Name</label>
                                </div>
                                <div className="appForm__field third">
                                    <label>Seller's Agent Phone</label>
                                    <input type="text" placeholder="Seller's Agent Phone" value={seller_agentphone} onChange={(e) => { SetSeller_agentphone(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Seller's Agent Email</label>
                                    <input type="email" placeholder="Seller's Agent Email" value={seller_agentemail} onChange={(e) => { SetSeller_agentemail(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Real Estate Company</label>
                                    <input type="text" placeholder="Real Estate Company" value={seller_realstate_company} onChange={(e) => { SetSeller_realstate_company(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Assistant/Transaction Coordinator's Name</label>
                                    <input type="text" placeholder="Assistant/Transaction Coordinator's Name" value={seller_coordinatorname} onChange={(e) => { SetSeller_coordinatorname(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Assistant/Transaction Coordinator's Phone</label>
                                    <input type="tel" placeholder="Assistant/Transaction Coordinator's Phone" value={seller_coordinatorphone} onChange={(e) => { SetSeller_coordinatorphone(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Assistant/Transaction Coordinator's Email</label>
                                    <input type="email" placeholder="Assistant/Transaction Coordinator's Email" value={seller_coordinatoremail} onChange={(e) => { SetSeller_coordinatoremail(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <div className="appForm__child">
                            <h4>Title/Escrow Information</h4>
                            <div className="appForm__flex">
                                <div className="appForm__field">
                                    <label>Title/Escrow Company*</label>
                                    <input type="text" name="escrowCompany" placeholder="Title/Escrow Company*" value={escrow_title} onChange={(e) => { SetEscrow_title(e.target.value) }} />
                                </div>
                                <div className="appForm__field two-thirds">
                                    <label>Street Address</label>
                                    <input type="text" placeholder="Street Address" value={escrow_street1} onChange={(e) => { SetEscrow_street1(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>Unit Number</label>
                                    <input type="text" placeholder="Unit #" value={escrow_street2} onChange={(e) => { SetEscrow_street2(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>City</label>
                                    <input type="text" placeholder="City" value={escrow_city} onChange={(e) => { SetEscrow_city(e.target.value) }} />
                                </div>
                                <div className="appForm__field third">
                                    <label>State</label>
                                    <select value={escrow_state} onChange={(e) => { SetEscrow_state(e.target.value) }}>
                                        <option value="" disabled="">State*</option>
                                        <option value="0" label="Alabama">Alabama</option>
                                        <option value="1" label="Alaska">Alaska</option>
                                        <option value="2" label="Arizona">Arizona</option>
                                        <option value="3" label="Arkansas">Arkansas</option>
                                        <option value="4" label="California">California</option>
                                        <option value="5" label="Colorado">Colorado</option>
                                        <option value="6" label="Connecticut">Connecticut</option>
                                        <option value="7" label="Delaware">Delaware</option>
                                        <option value="8" label="District Of Columbia">District Of Columbia</option>
                                        <option value="9" label="Florida">Florida</option>
                                        <option value="10" label="Georgia">Georgia</option>
                                        <option value="11" label="Hawaii">Hawaii</option>
                                        <option value="12" label="Idaho">Idaho</option>
                                        <option value="13" label="Illinois">Illinois</option>
                                        <option value="14" label="Indiana">Indiana</option>
                                        <option value="15" label="Iowa">Iowa</option>
                                        <option value="16" label="Kansas">Kansas</option>
                                        <option value="17" label="Kentucky">Kentucky</option>
                                        <option value="18" label="Louisiana">Louisiana</option>
                                        <option value="19" label="Maine">Maine</option>
                                        <option value="20" label="Maryland">Maryland</option>
                                        <option value="21" label="Massachusetts">Massachusetts</option>
                                        <option value="22" label="Michigan">Michigan</option>
                                        <option value="23" label="Minnesota">Minnesota</option>
                                        <option value="24" label="Mississippi">Mississippi</option>
                                        <option value="25" label="Missouri">Missouri</option>
                                        <option value="26" label="Montana">Montana</option>
                                        <option value="27" label="Nebraska">Nebraska</option>
                                        <option value="28" label="Nevada">Nevada</option>
                                        <option value="29" label="New Hampshire">New Hampshire</option>
                                        <option value="30" label="New Jersey">New Jersey</option>
                                        <option value="31" label="New Mexico">New Mexico</option>
                                        <option value="32" label="New York">New York</option>
                                        <option value="33" label="North Carolina">North Carolina</option>
                                        <option value="34" label="North Dakota">North Dakota</option>
                                        <option value="35" label="Ohio">Ohio</option>
                                        <option value="36" label="Oklahoma">Oklahoma</option>
                                        <option value="37" label="Oregon">Oregon</option>
                                        <option value="38" label="Pennsylvania">Pennsylvania</option>
                                        <option value="39" label="Rhode Island">Rhode Island</option>
                                        <option value="40" label="South Carolina">South Carolina</option>
                                        <option value="41" label="South Dakota">South Dakota</option>
                                        <option value="42" label="Tennessee">Tennessee</option>
                                        <option value="43" label="Texas">Texas</option>
                                        <option value="44" label="Utah">Utah</option>
                                        <option value="45" label="Vermont">Vermont</option>
                                        <option value="46" label="Virginia">Virginia</option>
                                        <option value="47" label="Washington">Washington</option>
                                        <option value="48" label="West Virginia">West Virginia</option>
                                        <option value="49" label="Wisconsin">Wisconsin</option>
                                        <option value="50" label="Wyoming">Wyoming</option>
                                    </select>
                                </div>
                                <div className="appForm__field third">
                                    <label>Zip Code</label>
                                    <input type="text" placeholder="Zip Code" value={escrow_zipcode} onChange={(e) => { SetEscrow_zipcode(e.target.value) }} />
                                </div>
                                <div className="appForm__field half">
                                    <label>Closing Officer's Name*</label>
                                    <input type="text" placeholder="Closing Officer's Name*" value={closing_officername} onChange={(e) => { SetClosing_officername(e.target.value) }} />
                                </div>
                                <div className="appForm__field half">
                                    <label>Closing Officer's Email*</label>
                                    <input type="email" placeholder="Closing Officer's Email*" value={closing_officeremail} onChange={(e) => { SetClosing_officeremail(e.target.value) }} />
                                </div>
                                <div className="appForm__field half">
                                    <label>Closing Officer's Phone</label>
                                    <input type="text" placeholder="Closing Officer's Phone" value={closing_officerphone} onChange={(e) => { SetClosing_officerphone(e.target.value) }} />
                                </div>
                                <div className="appForm__field half">
                                    <label>Estimated Close Date</label>
                                    <input type="text" placeholder="Estimated Close Date (mm/dd/yyyy)" value={closing_date} onChange={(e) => { SetClosing_date(e.target.value) }} />
                                </div>
                                <div className="appForm__field half">
                                    <label>Escrow Assistant's Name</label>
                                    <input type="text" placeholder="Escrow Assistant's Name" value={escrow_assistantname} onChange={(e) => { SetEscrow_assistantname(e.target.value) }} />
                                </div>
                                <div className="appForm__field half">
                                    <label>Escrow Assistant's Email</label>
                                    <input type="email" placeholder="Escrow Assistant's Email" value={escrow_assistantemail} onChange={(e) => { SetEscrow_assistantemail(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <div className="appForm__child">
                            <h4>Who Will This Order Be Billed To?*</h4>
                            {Bills.map(res => {
                                return (
                                    <div key={res.id}>
                                        <label>
                                            <input type="radio" value={res.user_type} checked={order_biller == res.user_type} onChange={(e) => { SetOrder_biller(e.target.value) }} />{res.user_type}
                                        </label><br />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="appForm__child">
                            <h4>Additional Instructions/Notes</h4>
                            <textarea rows="10" name="addlNotes" value={order_notes} onChange={(e) => { SetOrder_notes(e.target.value) }}></textarea>
                            <div className="appForm__flex">
                                <div className="appForm__field half">
                                    <label>Who is your sales person?</label>
                                    <input type="text" placeholder="Who is Your Sales Person?" value={sales_person} onChange={(e) => { SetSales_person(e.target.value) }} />
                                </div>
                                <div className="appForm__field half">
                                    <label>Coupon Code</label>
                                    <input type="text" placeholder="Coupon Code" value={coupon_code} onChange={(e) => { SetCoupon_code(e.target.value) }} />
                                    <span>*This will be applied at a later time*</span>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn" onClick={saveOrder}>CONTINUE</button>
                    </form>
                    {isLoading == true ? <ReactBootStrap.Spinner animation="border" /> : null}
                </div>
            </div>
        </>
    )
}
export default ApplicationInformation;