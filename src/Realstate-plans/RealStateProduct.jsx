import React, { useState, useEffect, useCallback } from 'react';
import APIUrl from "../Api"
import { Helmet } from "react-helmet";
import { TiChevronLeft } from 'react-icons/ti';
import latticebackground from "../assets/images/lattice-background.png"
import { CheckOutlined } from '@ant-design/icons';
import RealStateOrder from "./RealStateOrder";
import homewarranty from "../assets/images/homewarranty.png";
import ApplicationInformation from "./ApplicationInformation"
import { Modal, Button } from 'react-bootstrap'
import ConfirmOrder from './ConfirmOrder';

const SingleSquare = ({ productlist }) => {
    const [orderid, setOrderid] = useState();
    const [show, setShow] = useState(false);

    const siteURL = (APIUrl.defaults.baseURL)

    const handleClose = () => setShow(false);
    const clickHandler = (e) => {
        setShow(e.target.id)
    }
    const locId = localStorage.getItem('stateid')

    const pricesal = [];
    productlist.map(res => {
        pricesal.push(Number(res.price));
    })
    const minpriceval = JSON.parse(localStorage.getItem('minpriceval'));
    const priceval = JSON.parse(localStorage.getItem('priceval')) ? JSON.parse(localStorage.getItem('priceval')) : JSON.parse(localStorage.getItem('minpriceval'));
    const [showResults, setShowResults] = useState("SingleSquareContent")
    const changehandle = () => {
        setShowResults("RealStateOrder");
        localStorage.clear();
    };
    const AppInformation = () => {
        setShowResults("ApplicationInformation");
    };
    const callback = useCallback((status) => {
        if (status == 'GoBack') {
            setShowResults("SingleSquareContent");
        } else {
            setOrderid(status);
            setShowResults("ConfirmOrder");
        }
    }, []);
    const callbackOrder = useCallback((count) => {
        AppInformation();
    }, []);

    const [calamount, setCalamount] = useState(priceval);
    console.log(priceval, 'priceval')
    console.log(calamount, 'calamount')
    const [interAmount, setInterAmount] = useState(priceval);
    const [covaddedamnt, setcovaddedamnt] = useState();
    console.log(interAmount, 'interAmount')
    function totalammount(event, price) {
        let amount = 0;
        let newAmount = Number(interAmount) - Number(proprice);
        setcovaddedamnt(newAmount)
        price.quantity = event;
        coverage.map(res => {
            if (res.quantity && res.coverage_type !== 'default') {
                amount = (Number(res.quantity) * Number(res.coverage_price)) + amount
                const realAmount = Number(res.quantity) * Number(res.coverage_price);
                if (res.quantity >= 0) {
                    setRemaingAmount((Number(newAmount) - Number(realAmount)));
                    setnewblnc((Number(newAmount) - Number(realAmount)));
                    newAmount = Number(newAmount) - Number(realAmount);
                    let credit
                    if (newAmount > 0) {
                        credit = newAmount;
                    } else {
                        credit = 0;
                    }

                    localStorage.setItem('creditamnt', credit);
                    
                }
            }
        })
       
        let credit = localStorage.getItem('creditamnt');
        {
            credit > 0 ? setCalamount(Number(calamount)) : setCalamount(Number(proprice) + Number(amount));
        }
    }
    console.log(covaddedamnt, 'covaddedamnt')
    let selprice = minpriceval;
    function selectedamount() {
        if (pricesal && pricesal.length) {
            let selamount
            const minprice = priceval;
            const prices = pricesal.reduce((a, b) => {
                let aDiff = Math.abs(a - minprice);
                let bDiff = Math.abs(b - minprice);
                if (aDiff == bDiff) {
                    return a < b ? a : b;
                } else {
                    return bDiff < aDiff ? b : a;
                }
            });
            if (prices > minprice) {
                const index = pricesal.indexOf(prices)
                pricesal.splice(index, 1)
                selectedamount();
            } else if (prices < minpriceval) {
                selamount = minpriceval

            } else {
                selamount = prices
            }
            if (selamount) {
                selprice = selamount
            }
        }

    }
    function renderItems() {
        return coverage.map(res => res.quantity > 0 ? <span>{res.quantity}x {res.coverage_name}</span> : null)
    }

    selectedamount();
    const selectcards = productlist.find(res => Number(res.price) == selprice);
    const [selectedCard, setSelectedCard] = useState(selectcards);
    const remainblance = selectedCard.price;
    const nb = Number(interAmount) - Number(remainblance);
    const [newblnc, setnewblnc] = useState(nb)
    console.log(newblnc, 'newblnc');
    console.log(remainblance, 'remainblance');
    const [proprice, setValue] = useState(selprice);
    console.log(proprice, 'proprice')
    const [remaingAmount, setRemaingAmount] = useState(Number(priceval) - Number(proprice));
    if(newblnc > 0){
        if(remaingAmount <= 0 ){
            localStorage.setItem('remainblnc', 0);
        }else{
            localStorage.setItem('remainblnc', newblnc);
        }  
    }else{
        localStorage.setItem('remainblnc', 0);
    }
   
        // if (calamount > proprice) {
        //     if (remaingAmount) {
        //         localStorage.setItem('remainblnc', remaingAmount);
        //     } else {
        //         localStorage.setItem('remainblnc', newblnc);
        //     }
        // } else {
        //     localStorage.setItem('remainblnc', 0);
        // }
    

    const [proId, setId] = useState(selectcards ? selectcards.id : '');
    const [proname, setproname] = useState(selectcards ? selectcards.name : '');
    const onChange = e => {
        setValue(e.target.value);
        setId(e.target.id);
        setproname(e.target.name);
        // setRemaingAmount(priceval)
        setcovaddedamnt(0)
        if (remaingAmount > 0){
            setCalamount(e.target.value == selprice ? priceval : priceval);
            setInterAmount(e.target.value == selprice ? priceval : priceval);
            setRemaingAmount((Number(priceval) - (e.target.value)));
            setnewblnc((Number(priceval) - (e.target.value)));
        }
        else {
            setCalamount(e.target.value == selprice ? priceval : e.target.value);
            setInterAmount(e.target.value == selprice ? priceval : e.target.value);
        }
        
        const selectcard = productlist.find(res => Number(res.price) == e.target.value);
        setSelectedCard(selectcard);
        console.log(selectcard, 'selectcard');
    };
    console.log(remaingAmount, 'remaingAmount')
    const [coverage, setCoverage] = useState([]);
    useEffect(async () => {
        const url = "/get_realstate_coverage/" + `${proId}`
        const coverages = await APIUrl.get(`${url}`)
        setCoverage(coverages.data.coverage_upgrades);
    }, [proId]);

    let state_id = localStorage.getItem('stateid');
    const [featurelist, setFeature] = useState([]);
    function Statefeature() {
        let data = { state_id }
        fetch(`${siteURL}get_realstate_features`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                resp.json().then((featurelist) => {
                    setFeature(featurelist);
                })
            })
    }
    useEffect(() => {
        Statefeature()
    }, []);
    let featureslist = (featurelist.features);

    const [stanfeature, setstanfeature] = useState([]);
    useEffect(async () => {
        const url = "/realstate_standard_features/" + `${state_id}`
        const stanfeatures = await APIUrl.get(`${url}`)
        setstanfeature(stanfeatures.data);

    }, []);

    function BalanceBox() {
        if (remaingAmount > 0 && newblnc > 0) {
            return <div className="balanceBox">
                <div>You have a remaining balance of: remaingAmount</div>
                <div>
                    <strong className="ng-binding">
                        ${covaddedamnt ? remaingAmount : remaingAmount}
                    </strong>
                </div>
                <div>
                    <span>Apply this towards a
                        <span>COVERAGE UPGRADE</span>
                        by selecting an item in the table above.
                        If you do not select an upgrade, the balance will be applied to a service call.
                    </span>
                    <button className="btn">Start Over</button>
                </div>
            </div>
        } else {
            return null
        }

    }

    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            {showResults === "RealStateOrder" ? <RealStateOrder /> : showResults === "ApplicationInformation" ? <ApplicationInformation selectedCard={selectedCard} calamount={calamount} coverage={coverage} parentCallback={callback} /> : showResults === "ConfirmOrder" ? <ConfirmOrder parentCallback={callbackOrder} orderid={orderid} /> :

                <div className="home_page">
                    <div className="top_img">
                        <img src={homewarranty} alt="homewarranty" />
                    </div>
                    <div className="realstate">
                        <h1>Real Estate Orders</h1>
                    </div>
                    <div className="container">
                        <div className="plan-ttl">
                            <h2>PLANS & PRICING</h2>
                            <button type="button" className="btn" onClick={changehandle} ><TiChevronLeft />Go back</button>
                        </div>
                        <section className="planPricingHolder">
                            <div className="toplist">
                                <ul className="topList">
                                    <li> Scan each of our <strong>Home Warranty</strong> plans side-by-side to compare features.</li>
                                    <li> Selefct the Plan that’s best for your needs by clicking the radio button in the column of your choice.</li>
                                    <li> Review <strong className="strong underline">Coverage Upgrades</strong> below. Customize your chosen Plan and get a live total by changing option quantities.</li>
                                    <li> Select the Plan that’s best for your needs by clicking the radio button in the column of your choice.</li>
                                    <li> Click the <strong className="strong green">Continue</strong> button at the bottom of the page. After submitting the form you may download the invoice or receive an invoice via email.</li>
                                </ul>
                            </div>
                        </section>
                        <div className='pricingboxholder'>
                            <div className="standard-features pricing">
                                <h3>Standard Features for all plans <br />
                                    <span>*(service fee may be required)
                                        <div className="blink_me">$
                                            {locId == 1 || locId == 2 ? "60" : null || locId == 3 ? "70" : null || locId == 4 || locId == 5 ? "65" : null}
                                        </div></span>
                                </h3>
                                <div className="standard-flexy">
                                    {stanfeature.map(feat => {
                                        return (
                                            <div className="feature_group">
                                                <p className="feature_header">{feat.sf_title}</p>
                                                {feat.features.map(featurelist => (
                                                    <p>{featurelist.feature_name}</p>
                                                ))}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="light-back feature_plan_option">
                            <div className="table-cont">
                                <h2>INDIVIDUAL PLANS INCLUDE THESE ADDITIONAL OPTIONS</h2>
                                <div className="right-table">
                                    {productlist.map((pro, index) => (
                                        <div key={index} className={`standard_card header ${proprice == pro.price ? 'selectedpro' : ''}`}>
                                            <div className="tagdown standard">
                                                {proprice == pro.price ? <span className="tagtxt-top">You've selected</span> : <span>Click to add</span>}
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={pro.name}
                                                        id={pro.id}
                                                        value={pro.price}
                                                        checked={(proprice == pro.price)}
                                                        onChange={onChange}
                                                    />
                                                    <h4>{pro.name}</h4><span className="tagtxt-mid"><div dangerouslySetInnerHTML={{ __html: pro.short_desc }} /></span><br />
                                                    <span className="tagtxt-bot">${pro.price}</span>
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="textured">
                                <img src={latticebackground} alt="latticebackground" />
                            </div>
                        </div>
                        <section className="unique-feature pricing_plan">
                            <div className="inner">
                                <div className="table-cont-2 new-table-dsn">
                                    <div className="table-left">
                                        {featureslist ? featureslist.map(feature => {
                                            return (
                                                <div className="in-box">
                                                    <div key={feature.id}>{feature.name}</div>
                                                </div>
                                            )
                                        }) : null}
                                    </div>
                                    {productlist.map((item, index) => (
                                        <div className="table-right" key={index}>
                                            {item.features.map((c, i) => (
                                                <>
                                                    {c.value == "No" ? <div className="feature"></div> : <div className="feature included"><CheckOutlined className="antcheck" /></div>}
                                                </>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="feature_img">
                                <img src={latticebackground} alt="latticebackground" />
                            </div>
                        </section>
                        <section className="coverage_upgrades">
                            <div className="container">
                                <div className="coverage-ttl">
                                    <strong>COVERAGE UPGRADES</strong><br />
                                    <span>SELECT ADDITIONAL ITEMS TO CUSTOMIZE YOUR PLAN</span>
                                </div>
                                <div className="upgrade-table">
                                    <div className="upgrade-table__repeater">
                                        {coverage.map((coveragepro, i) => (
                                            <div className="upgrade-table__input">
                                                {/* <input type="number" min="0" /> */}
                                                <input
                                                    disabled={coveragepro.coverage_type === "default" ? true : false}
                                                    checked={coveragepro.coverage_type == 'checkbox' ? coveragepro.quantity == 0 ? false : true : false}
                                                    onChange={event => totalammount(coveragepro.coverage_type == 'checkbox' ? coveragepro.quantity == 0 ? 1 : 0 : event.target.value, coveragepro)}
                                                    type={coveragepro.coverage_type}
                                                    min="0" />
                                                <div className="upgrade-table__price">${coveragepro.coverage_price}</div>
                                                <div className="upgrade-table__title">{coveragepro.coverage_name}  {coveragepro.content ? coveragepro.url ?
                                                    <div className="showbtn" variant="primary" >
                                                        <div id={coveragepro.id} onClick={e => clickHandler(e)} dangerouslySetInnerHTML={{ __html: coveragepro.url }} />
                                                    </div>
                                                    : <div className="showbtn_wcont" variant="primary"  >
                                                        <svg id={coveragepro.id} onClick={e => clickHandler(e)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info" viewBox="0 0 16 16">
                                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                        </svg>
                                                    </div>
                                                    : null}
                                                </div>
                                                {coveragepro.content ?
                                                    <div>
                                                        <Modal size="lg" show={show == coveragepro.id ? true : null} onHide={handleClose.bind(coveragepro.id)} centered>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>{coveragepro.content.title}</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body><div dangerouslySetInnerHTML={{ __html: coveragepro.content.full_content }} /></Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="secondary" onClick={handleClose}>OK</Button>
                                                            </Modal.Footer>
                                                        </Modal>
                                                    </div>
                                                    : null}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="make_me_flex">
                            <div className="running-total">
                                <div className="inner">
                                    <div className="running-total__title">
                                        <h4>{proname}</h4>
                                        <span>Home Warranty</span>
                                        <span><strong>${proprice}</strong></span>
                                    </div>
                                    <div className="running-total__additions">
                                        {renderItems()}
                                    </div>
                                    <div className="running-total__final">
                                        <h4>Total Amount:</h4>
                                        <span><strong>${calamount}</strong></span>
                                    </div>
                                </div>
                            </div>
                            <BalanceBox />
                        </div>
                        <div className="cont-btn">
                            <button type="button" className="btn" onClick={AppInformation}>CONTINUE</button>
                        </div>
                    </div>
                </div>

            }
        </>
    );
}
export default SingleSquare;