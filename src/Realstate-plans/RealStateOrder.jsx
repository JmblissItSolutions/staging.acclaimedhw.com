import React, { useState, useEffect } from "react";
import APIUrl from "../Api"
import { Helmet } from "react-helmet";
import homewarranty from "../assets/images/homewarranty.png";
import RealStateProduct from "./RealStateProduct";

const RealStateOrder = () => {
    const [state_id, setStateId] = useState();
    const [cov_type_id, setCoverage] = useState();
    let iamoptions = ["escrow-officer", "buyer-agent", "listing-agent", "buyer"];
    const [iam, setIam] = useState('');
    const [property_type, setWarranty] = useState();
    const [question_id_0, setsubque1] = useState(1);
    const [question_id_1, setsubque2] = useState(2);
    const [squarevalue, setSqure] = useState('Yes');
    const [constructionvalue, setConstruction] = useState('No');
    const [listcheckbox1, setListcheck1] = useState('');
    const [listcheckbox2, setListcheck2] = useState('');
    const [showResults, setShowResults] = useState("")

    const siteURL = (APIUrl.defaults.baseURL)

    localStorage.setItem('stateid', state_id);
    localStorage.setItem('coverageid', cov_type_id);
    localStorage.setItem('propid', property_type);
    localStorage.setItem('iam', iam);

    const changehandle = () => {
        setShowResults("RealStateProduct")
    };
    const [hompalan, sethompalan] = useState([]);
    useEffect(async () => {
        const hompalans = await APIUrl.get(`/get_realstate_states`)
        sethompalan(hompalans.data);
    }, []);

    const [coveragetype, setcoveragetype] = useState([]);
    useEffect(async () => {
        localStorage.clear();
        const coveragetypes = await APIUrl.get(`/get_realstate_covtype`)
        setcoveragetype(coveragetypes.data);
    }, []);
    let covtypearay = (coveragetype.questions)
    let covres = (coveragetype.result)

    const [result, setResult] = useState([]);
    function AnswerList() {
        let data = { state_id, cov_type_id }
        fetch(`${siteURL}get_realstate_questions`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                resp.json().then((result) => {
                    setResult(result);
                })
            })
    }
    const quesList = result.questions
    let response = (result.result)
    useEffect(() => {
        AnswerList()
    }, [state_id, cov_type_id]);
    const question_value_0 = squarevalue
    const question_value_1 = constructionvalue

    function para() {
        let tt
        if (property_type == 1 && cov_type_id == 1) {
            tt = { state_id, cov_type_id, property_type, question_id_0, question_value_0, question_id_1, question_value_1 }
        }
        else if (property_type == 1 && cov_type_id == 2) {
            tt = { state_id, cov_type_id, property_type, question_id_0, question_value_0 }
        }
        else {
            tt = { state_id, cov_type_id, property_type }
        }
        return tt
    }
    const [product, setProduct] = useState([]);
    let data = para()

    const ProductList = () => {
        fetch(`${siteURL}get_realstate_products`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                resp.json().then((product) => {
                    setProduct(product);
                })
            })
    }

    let productlist = product.products
    let prores = product.result
    useEffect(() => {
        ProductList()
    }, [state_id, property_type, squarevalue, constructionvalue]);

    function allprices() {
        if (prores) {
            return productlist.map((n) => n.price);
        }
    }
    function minprices() {
        if (prores) {
            return Math.min(...allprice)
        }
    }
    const allprice = allprices()
    const minprice = minprices()

    const Subquestion = e => {
        setsubque1(e.target.id);
        setSqure(e.target.value);
    }
    const SubquestionCon = e => {
        setsubque2(e.target.id);
        setConstruction(e.target.value);
    }
    const [val, setVal] = useState();
    const getval = event => {
        //const priceval = event.target.value;
        let { value, min, max } = event.target;
        value = Math.max(Number(min), Number(value));
        localStorage.setItem("priceval", value);
    };
    
    localStorage.setItem("minpriceval", minprice);
    const Homeplan = () => (
        <>
            <div className="homplan">
                <h4 className="order_ttl">I want to get a home warranty for a property in:</h4>
                {hompalan.map(palan => (
                    <label key={palan.location_name} className="radiodesign">
                        <input checked={state_id == palan.id}
                            type="radio" value={palan.id} onChange={e => setStateId(e.target.value)} />
                        {palan.location_name}
                        <span className="checkmark"></span>
                    </label>
                ))}
            </div>
        </>
    )
    const Coverage = () => (
        <>
            <div className="coverage">
                <h4 className="order_ttl">Let us know what type of coverage this is...</h4>
                {covtypearay.map(coverage => (
                    <label key={coverage.co_type_name} className="radiodesign">
                        <input checked={cov_type_id == coverage.id}
                            type="radio" value={coverage.id} onChange={e => setCoverage(e.target.value)} />
                        {coverage.co_type_name}
                        <span className="checkmark"></span>
                    </label>
                ))}
            </div>
        </>
    )
    const ConstCall = () => (
        <>
            <div className="constcall">
                <p>Standard Home Warranty Plan for a new single-family home, condominium, townhome or mobile home for years 2-4 :</p>
                <span><strong>${minprice}</strong></span>
                <p> Need COVERAGE UPGRADES?</p>
                <span>Call Acclaimed at<strong> 888-494-9460</strong></span>
                {productlist ?
                <div>
                    <button type="button" onClick={changehandle} className="btn">CONTINUE</button>
                </div>
                :null}
            </div>
        </>
    )
    const Assitance = () => (
        <>
            <div className="assitance">
                <p>This order requires special assistance.</p>
                <p>Call an Acclaimed Home Warranty agent at: <a><strong className="greentxt">888-494-9460</strong></a></p>
                <p>We will be able to add <strong className="bluetxt">COVERAGE UPDGRADES</strong>, finalize you order, and provide an invoice.</p>
            </div>
        </>
    )
    const Answering = () => (
        <>
            <div className="answering">
                <h4 className="order_ttl">Please begin by answering these questions...</h4>
                <div className="orders">
                    <div className="order_flex">
                        <div className="order_col">
                            <span>I am the
                                <select className="order_sel" value={iam} onChange={e => setIam(e.target.value)}>
                                    <option value="select any option">select any option</option>
                                    {iamoptions.map(res => (
                                        <option key={res} value={res} >{res}</option>
                                    ))}
                                </select>
                            </span>
                        </div>
                    </div>
                    <div>
                        {response &&
                            <div className="warranty_order">
                                <span>This home warranty order is for a:</span>
                                {quesList.map(qus => (
                                    <div>
                                        <label key={qus.id} className="radiodesign">
                                            <input checked={property_type == qus.id}
                                                type="radio" value={qus.id} onChange={e => setWarranty(e.target.value)} />
                                            {qus.question_name}
                                            <span className="checkmark"></span>
                                        </label>
                                        {property_type == 1 ?
                                            <div>
                                                {property_type == qus.id &&
                                                    qus.pt_questions.map((subqus, index) => (
                                                        <div className="subquestion">
                                                            {index == 0 || (squarevalue == 'Yes') ? <h5>{subqus.question_name}</h5> : null}
                                                            {subqus.options.map((subqusv, i) => (
                                                                <div>
                                                                    <div>
                                                                        {subqusv.home_size ? <label className="radiodesign">
                                                                            <input id={subqus.question_id} checked={squarevalue == subqusv.home_size}
                                                                                type="radio" value={subqusv.home_size} onChange={Subquestion} />
                                                                            {subqusv.home_size}
                                                                            <span className="checkmark"></span>
                                                                        </label> : null}
                                                                        {subqusv.new_construction && (squarevalue == 'Yes') ? <label className="radiodesign">
                                                                            <input id={subqus.question_id} checked={constructionvalue == subqusv.new_construction}
                                                                                type="radio" value={subqusv.new_construction} onChange={SubquestionCon} />
                                                                            {subqusv.new_construction}
                                                                            <span className="checkmark"></span>
                                                                        </label> : null}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))}
                                            </div> : null
                                        }
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                    {/* <div className="order_flex">
                        <a onClick={e => setStateId(false) || setCoverage(false) || setWarranty(false)} className="btn">Start Over</a>
                    </div> */}
                </div>
            </div>
        </>
    )
    const Terms = () => (
        <>
            <div className="listing_seller">
                <h4 className="order_ttl">Listing/Seller's Coverage Terms...</h4>
                <span className="">Listing/Seller's Coverage is effective upon receipt of application. Plan continues until expiration of the initial listing period not to exceed 180 days or until listing cancellation or close of sale, whichever occurs first. AHW, in its sole discretion, may extend coverage period. Pre-existing conditions are not covered for the Seller. Optional coverages set forth in this Contract are not available for Seller’s Coverage. If a claim is made by the Seller during the listing period a service fee will be required and paid by the Seller. If the property does not close and a claim has been made during the listing period, the Seller is responsible for full payment of services rendered or full payment of the home warranty coverage plan whichever is less.</span>
                <label><input checked={listcheckbox1} type="checkbox" value="1"
                    onChange={e => setListcheck1(e.target.checked)} />
                    Yes. I agree to these terms.</label>
                <label>
                    <input checked={listcheckbox2} type="checkbox" value="2"
                        onChange={e => setListcheck2(e.target.checked)} />
                    I understand the invoice I will receive when this form is
                    completed is just for my records. No monies are due until closing.
                    I will notify Acclaimed Home Warranty when a buyer has been
                    identified.</label>
            </div>
        </>
    )
    const Bestplan = () => (
        <>
            <div className="bestplan" >
                <div className="plan_system">
                    <div>
                        <div>
                            <div>
                                <h4 className="order_ttl">Let our system select the best plan</h4>
                                <p>Enter Your Home Warranty Budget</p>
                            </div>
                            <div>
                                <input type="number" min={minprice} defaultValue={minprice} onChange={getval} max="2000" className="select"></input>
                                <p></p>
                            </div>
                            {productlist ?
                            <div>
                                <p>Enter an amount from ${minprice}-$2000</p>
                            
                                <button type="button" onClick={changehandle} className="btn">GO</button>
                                <br />
                            </div>
                              : null}
                        </div>
                    </div>
                </div>
                 <div className="planside">
                    <div>
                        <h4 className="or">OR</h4>
                    </div>
                    {productlist ?
                    <div className="click_here">
                        <button type="button" className="btn" onClick={changehandle}>Click Here..</button><br />
                        <span id="click_span"><em>to Compare Home Warranty Plans Side-By-Side and make your selection/customize</em></span>
                    </div>
                    : null}
                </div> 
                
            </div>
        </>
    )
    const ListBestplan = () => (
        <>
         
            <div className="bestplan" >
                <div className="planside">
                    <div>
                        <h4 className="or">OR</h4>
                    </div>
                    {productlist ? 
                    <div className="click_here">
                   <button type="button" onClick={changehandle} className="btn">Click Here</button><br /> 
                        <span id="click_span"><em>to Compare Home Warranty Plans Side-By-Side and make your selection/customize</em></span>
                    </div>
                    : null}
                </div>
            </div>
            
        </>
    )
    const Baseprice = () => (
        <>
            <div className="baseprice" >
                <div className="base_price_plan">
                    <div className="baseprice_plan">
                        <h4 className="order_ttl">The base price for this coverage is {minprice}</h4>
                        <p>The remaining balance can be applied towards Coverage Upgrades or service calls.</p>
                    </div>
                    {productlist ? 
                    <div className="baseprice_amnt">
                        <input type="number" min={minprice} max="2000" onChange={getval}></input>
                        <div className="">
                            <p className="">Enter an amount from ${minprice}-$2000</p>
                            <button type="button" className="btn" onClick={changehandle}>GO</button>
                            <br />
                        </div>
                    </div>
                    : null}
                </div>
            </div>
        </>
    )
    const Condominium = () => (
        <>
            <div className="Condominium">
                <div className="Condominium">
                    <p>Standard Home Warranty Plan for a condominium, townhome, mobile home less than 2k sq ft:</p>
                    <p><strong className="blacktext">${minprice}</strong></p>
                    <p>Need COVERAGE UPGRADES?</p>
                    <p>Call Acclaimed at <strong className="blacktext">888-494-9460</strong></p>
                    {productlist ? 
                    <div>
                        <button type="button" className="btn" onClick={changehandle}>CONTINUE</button>
                    </div>
                     : null}
                </div>
            </div>
        </>
    )
    return (
        <>
            <Helmet>
                <title>Real Estate Orders in Arizona by Acclaimed Home Warranty</title>
                <meta name="description" content="Are you looking for a home warranty for your property in Arizona? Reach out to Acclaimed Home Warranty for coverage details for buyers and sellers." />
            </Helmet>
            {showResults === "RealStateProduct" ? <RealStateProduct productlist={productlist} /> :
                <div className="home_page estate-pg">
                    <div className="top_img">
                        <img src={homewarranty} alt="homewarranty" />
                    </div>
                    <div className="realstate">
                        <h1>Real Estate Orders</h1>
                    </div>
                    <div className="container">
                        <div>
                            <Homeplan />
                            {(state_id == null) ? null : <Coverage />}
                            {cov_type_id == 1 ? <Answering /> : null}
                            {cov_type_id == 2 ? <Terms /> : null}
                            {(cov_type_id == 2) && (listcheckbox1 === true) && (listcheckbox2 === true) ? <Answering /> : null}
                            {(property_type == 1) && (cov_type_id == 1) && (squarevalue == "Yes") && (constructionvalue == "No") ? <Bestplan /> : null}
                            {(property_type == 1) && (cov_type_id == 1) && (squarevalue == "Yes") && (constructionvalue == "Yes") ? <ConstCall /> : null}
                            {(property_type == 3) && (cov_type_id == 1) || (property_type == 4) && (cov_type_id == 1) || (property_type == 5) && (cov_type_id == 1) ? <Baseprice /> : null}
                            {(property_type == 2) && (cov_type_id == 1) ? <Condominium /> : null}
                            {(property_type == 3) && (cov_type_id == 2) || (property_type == 4) && (cov_type_id == 2) || (property_type == 5) && (cov_type_id == 2) ? <Baseprice /> : null}
                            {(property_type == 1) && (cov_type_id == 2) && (listcheckbox1 === true) && (listcheckbox2 === true) && (squarevalue == "Yes") ? <ListBestplan /> : null}
                            {(property_type == 1) && (cov_type_id == 2) && (listcheckbox1 === true) && (listcheckbox2 === true) && (squarevalue == "No") ? <Assitance /> : null}
                            {(property_type == 1) && (cov_type_id == 1) && (squarevalue == "No") ? <Assitance /> : null}
                        </div>
                    </div>
                </div>
            }
        </>
    )
};
export default RealStateOrder;