import React, { useRef, useEffect, useState } from "react";
import APIUrl from "../Api";
import { useHistory, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Checkoutbg from "../assets/images/Checkoutbg.png";
import { FaRegWindowMaximize } from 'react-icons/fa';
import visa from "../assets/images/card-visa.png";
import master from "../assets/images/card-mastercard.png";
import american from "../assets/images/card-amex.png";
import discover from "../assets/images/card-discover.png";
import dinnerclub from "../assets/images/card-dinersclub.png";
import jcb from "../assets/images/card-jcb.png";
import { Radio } from 'antd';
import OrderRecieved from "./Order-Received";
import * as ReactBootStrap from "react-bootstrap";
import Countrylist from "./Countrylist"


const CheckOut = () => {
    let history = useHistory();
    let localdata = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    let val = JSON.parse(localStorage.getItem('value'));
    let protype = JSON.parse(localStorage.getItem('product'));
    let covrage = JSON.parse(localStorage.getItem('coverage'));
    let totalMonthly = JSON.parse(localStorage.getItem('totalMonthly'));
    let totalYearly = JSON.parse(localStorage.getItem('totalYearly'));
    let MonthlyPrice = JSON.parse(localStorage.getItem('MonthlyPrice'));
    let YearlyPrice = JSON.parse(localStorage.getItem('YearlyPrice'));
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [company, setCompany] = useState("");
    const [country, setCountry] = useState("");
    const [street1, setStreet1] = useState("");
    const [street2, setStreet2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [prop_street1, SetProp_Street1] = useState("");
    const [prop_street2, SetProp_Street2] = useState("");
    const [prop_city, SetProp_City] = useState("");
    const [prop_state, SetProp_state] = useState("");
    const [prop_zipcode, SetProp_zipcode] = useState("");
    const [order_notes, SetOrder_notes] = useState("");
    const [pay_method, setPayment] = useState("card");
    const [status, setStatus] = useState("pending");
    const [visible, setVisible] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isCoupon, setCoupon] = useState(false);
    const [coupon_code, setCoupon_code] = useState("");
    const [couponresult, setCouponresult] = useState([]);
    const [applyresult, setApplyresult] = useState([]);
    const [showme, setShowme] = useState(0);

    const siteURL = (APIUrl.defaults.baseURL)

    const onClick = (e) => {
        e.preventDefault();
        setVisible(!visible);
    }
    const [statelist, setStatelist] = useState([]);
    useEffect(async () => {
        const result = await APIUrl.get(`/getAllLocations`)
        setStatelist(result.data);
    }, []);
    const [result, setResult] = useState([]);
    function saveData() {
        setLoading(true)
        let data = { firstname, lastname, company, country, street1, street2, city, state, pincode, phone, email, prop_street1, prop_street2, prop_city, prop_state, prop_zipcode, order_notes, subtotal, total, pay_method, status }
        fetch(`${siteURL}create_checkout`, {
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
                    if (res !== true) {
                        window.scrollTo({
                            top: 300,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }
                    setLoading(false)
                })

            })

    }
    console.log(result, 'result')
    let resultMsg = (result.message)
    let orderid = (result.order_id)
    let res = (result.result)
    function CouponData(e) {
        e.preventDefault();
        setCoupon(true)
        let data = { coupon_code }
        fetch(`${siteURL}check_coupon`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                resp.json().then((couponresult) => {
                    setCouponresult(couponresult);
                })
                setCoupon(false)
            })

    }
    let couponMsg = (couponresult.message)
    let couponres = (couponresult.result);
    let couponval = (couponresult.result);
    function removeCoupon() {
        setCouponresult("")
    }
    function interval() {
        if (val == 1 || val == null) {
            return 'yearly'
        }
        else if (val == 2) {
            return 'monthly'
        }
    }

    let intervaltype = interval()
    let order_id = orderid

    const mainPro = localdata.map(item => {
        let orderid = "order_id"
        let product_id = "product_id"
        let product_name = "product_name"
        let prod_type = "prod_type"
        let pay_interval_type = "pay_interval_type"
        let quantity = "quantity"
        const container = {};
        container[orderid] = order_id
        container[product_id] = item.id
        container[product_name] = item.name
        container[prod_type] = "simple"
        container[pay_interval_type] = intervaltype
        container[quantity] = 1
        return container;
    })

    function getArray() {
        if (covrage) {
            return covrage
        } else {
            return covrage = []
        }
    }
    let arr = getArray()
    const CovList = covrage.filter(person =>
        person.quantity > 0).map(item => {
            let orderid = "order_id"
            let product_id = "product_id"
            let product_name = "product_name"
            let prod_type = "prod_type"
            let pay_interval_type = "pay_interval_type"
            let quantity = "quantity"
            const container = {};
            container[orderid] = order_id
            container[product_id] = item.id
            container[product_name] = item.name
            container[prod_type] = "addon"
            container[pay_interval_type] = intervaltype
            container[quantity] = item.quantity
            return container;
        })
    if (mainPro && mainPro.length) {
        CovList.push(mainPro[0]);
    }
    const [productlist, setProductlist] = useState([]);
    function saveProduct() {
        fetch(`${siteURL}add_orderitems`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(CovList)
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

    const Cove = () => (
        <>
            {covrage.map((pro, index) => (
                <div className="option" key={index}>
                    <ul>{(pro.quantity > 0 && pro.quantity == 1) ? <li>{pro.quantity}x{pro.name}</li> : ""}
                        {(pro.quantity > 1) ? <li>{pro.quantity}x{pro.name}</li> : ""}
                    </ul>
                </div>
            ))}
        </>
    )
    const PaymentOption = e => {
        setPayment(e.target.value);
    }
    function subtotalfun() {
        if (totalMonthly && val === 2) {
            return totalMonthly
        }
        else if (totalYearly && val === 1 || val === null) {
            return totalYearly
        }
    }
    function subtotalfun2() {
        if (MonthlyPrice && val === 2) {
            return MonthlyPrice
        }
        else if (YearlyPrice && val === 1 || val === null) {
            return YearlyPrice
        }
    }
    let subtotalall = subtotalfun()
    let subtotalall2 = subtotalfun2()
    function sub() {
        if (totalYearly) {
            return subtotalall
        } else if (YearlyPrice) {
            return subtotalall2
        }
    }

    let v1 = sub()
    function couponAmount() {
        let couponamount
        if (couponres) {
            couponamount = (couponresult.data.coupon_amount)
        }
        return couponamount
    }
    function couponType() {
        let coupontype
        if (couponres) {
            coupontype = (couponresult.data.discount_type)
        }
        return coupontype
    }
    let camount = couponAmount()
    let couponamount = parseFloat(camount).toFixed(2)
    let coupontype = couponType()
    let cpamount = (couponamount / 100 * v1)
    let couponamountpercent = parseFloat(cpamount).toFixed(2)

    function ttlAmount() {
        let totalamount
        if (coupontype == "fixed") {
            totalamount = v1 - couponamount
        } else if (coupontype == "percent") {
            totalamount = v1 - (couponamount / 100 * v1)
        } else {
            totalamount = v1
        }
        return totalamount
    }
    const ttl = ttlAmount()
    const total = parseFloat(ttl).toFixed(2)
    const [subtotal, SetSubtotal] = useState(v1);
    let amount = total
    function alldiscount() {
        let distype
        if (coupontype == "fixed") {
            distype = couponamount
        } else if (coupontype == "percent") {
            distype = couponamountpercent
        }
        return distype
    }
    let discount = alldiscount()
    let payer_email = email

    function AppyCoupon() {
        let data = { order_id, coupon_code, discount }
        fetch(`${siteURL}applycoupon`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                resp.json().then((applyresult) => {
                    setApplyresult(applyresult);
                })
            })
    }
    if (res) {
        AppyCoupon()
    }
    const [cc_number, setcc_number] = useState("");
    const [expiry_month, setexpiry_month] = useState("");
    const [expiry_year, setexpiry_year] = useState("");
    const [cvv, setcvv] = useState("");
    const [paymentresult, setPaymentresult] = useState([]);
    function paymentData() {
        let data = { cc_number, expiry_month, expiry_year, cvv, amount, order_id, payer_email }
        fetch(`${siteURL}chargepayment`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                resp.json().then((res) => {
                    if (res.result == true) {
                        setPaymentresult(res);
                    }
                })
            })
        let res = false
    }
    let payres = (paymentresult.result)
    let paymsg = (paymentresult.message)
    if (res) {
        saveProduct()
        paymentData()
    }
    function RedirectInvoice() {
        history.push("/homeowner-plans/checkout/order-received")
    }
    if (res == true) {
        RedirectInvoice()
    }
    function disablebtn() {
        let disbtn
        if (cc_number === '' || expiry_month == '' || expiry_year == '' || cvv == '') {
            disbtn = true
        } else {
            disbtn = false
        }
        return disbtn
    }
    let disbtn = disablebtn()

    useEffect(() => {
        localStorage.setItem('order_id', JSON.stringify(order_id))
    }, [order_id])

    const ShoppingCart = () => (
        <>
            <div className="home_page">
                <section className="top-image">
                    <img src={Checkoutbg} alt="Checkoutbg" />
                </section>
                <div className="container">
                    <div className="shop_ttl">
                        <h1>Checkout</h1>
                        <div className="shop-text">
                            <p>You dont have any product in  your cart please click on this button</p>
                            <button className="btn" onClick={() => history.push("/home-plans")}>Return to shop</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            {showme === localdata.length ? <ShoppingCart /> :
                <div className="home_page checkout-pg">
                    <section className="top-image">
                        <img src={Checkoutbg} alt="Checkoutbg" />
                    </section>
                    <div className="container">
                        <div className="checkout_ttl">
                            <h1>Checkout</h1>
                            {disbtn}
                        </div>
                    </div>
                    <section className="inner">
                        <div className="woocommerce">
                            <div className="woocommerce-notices-wrapper"></div>
                            <div className="woocommerce-form-coupon-toggle">
                                <div className="woocommerce-info">
                                    <FaRegWindowMaximize className="windowmaximize" />
                                    Have a coupon? <a className="showcoupon" onClick={onClick}>Click here to enter your code</a>
                                </div>
                                {visible ?
                                    <form className="checkout_coupon woocommerce-form-coupon">
                                        <p>If you have a coupon code, please apply it below.</p>
                                        {couponval == true ? <p className="success-msg">{couponMsg}</p> : null}
                                        {couponval == false ? <p className="error-msg">{couponMsg}</p> : null}
                                        <p className="form-row form-row-first">
                                            <input type="text" className="input-text" placeholder="Coupon code"
                                                name="coupon_code" value={coupon_code} onChange={(e) => { setCoupon_code(e.target.value) }} />
                                        </p>
                                        <p className="form-row form-row-last">
                                            <button type="submit" className="button" value="Apply coupon" onClick={CouponData}>Apply coupon</button>
                                            {isCoupon == true ? <ReactBootStrap.Spinner animation="border" /> : null}
                                        </p>
                                    </form> : null}
                            </div>
                            <p className="error-msg">{resultMsg}</p>
                            {res == false ? <p className="error-msg">{res}</p> : null}
                            <form className="checkout woocommerce-checkout">
                                <div className="col2-set">
                                    <div className="col-1">
                                        <div className="woocommerce-billing-fields">
                                            <h3>Billing details</h3>
                                            <div className="woocommerce-billing-fields__field-wrapper">
                                                <p className="form-row form-row-first validate-required">
                                                    <label>First name<abbr className="required" title="required">*</abbr></label>
                                                    <input type="text" maxLength="45" name="firstname" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} className="input-text" />
                                                </p>
                                                <p className="form-row form-row-first validate-required">
                                                    <label>Last name<abbr className="required" title="required">*</abbr></label>
                                                    <input type="text" maxLength="45" name="lastname" value={lastname} onChange={(e) => { setLastname(e.target.value) }} className="input-text" />
                                                </p>
                                                <p className="form-row form-row-wide">
                                                    <label>Company name<span>(optional)</span></label>
                                                    <input type="text" maxLength="45" className="input-text" value={company} onChange={(e) => { setCompany(e.target.value) }}></input>
                                                </p>
                                                <p className="form-row form-row-wide">
                                                    <label>Country/Region<abbr className="required" title="required">*</abbr></label>
                                                    <select name="country" value={country} onChange={(e) => { setCountry(e.target.value) }}>
                                                        <option value="default">Select a country / region…</option>
                                                        <Countrylist/>
                                                    </select>
                                                </p>
                                                <p className="form-row form-row-wide">
                                                    <label>Street address<abbr className="required" title="required">*</abbr></label>
                                                    <input type="text" maxLength="55" className="input-text" value={street1} onChange={(e) => { setStreet1(e.target.value) }} placeholder="House number and street name"></input>
                                                    <input type="text" maxLength="55" className="input-text" value={street2} onChange={(e) => { setStreet2(e.target.value) }} placeholder="Apartment, suite, unit, etc. (optional)"></input>
                                                </p>
                                                <p className="form-row form-row-wide">
                                                    <label>Town/City<abbr className="required" title="required">*</abbr></label>
                                                    <input type="text" maxLength="35" className="input-text" value={city} onChange={(e) => { setCity(e.target.value) }}></input>
                                                </p>
                                                <p className="form-row form-row-wide">
                                                    <label>State<abbr className="required" title="required">*</abbr></label>
                                                    <select value={state} onChange={(e) => { setState(e.target.value) }}>
                                                    <option value="default">Select an state...</option>
                                                        {statelist.map((state) => (
                                                            <>                          
                                                                <option value={state.state_name} key={state.state_name}>{state.state_name}</option>
                                                            </>
                                                        ))}
                                                    </select>
                                                </p>
                                                <p className="form-row form-row-wide">
                                                    <label>ZIP<abbr className="required" title="required">*</abbr></label>
                                                    <input type="number" maxLength="6" className="input-text" value={pincode} onChange={(e) => { setPincode(e.target.value) }}></input>
                                                </p>
                                                <p className="form-row form-row-wide">
                                                    <label>Phone<abbr className="required" title="required">*</abbr></label>
                                                    <input type="text" name="phone" maxLength="10" value={phone} onChange={(e) => { setPhone(e.target.value) }} className="input-text" />
                                                </p>
                                                <p className="form-row form-row-wide">
                                                    <label>Email address<abbr className="required" title="required">*</abbr></label>
                                                    <input type="email" name="email" maxLength="35" value={email} onChange={(e) => { setEmail(e.target.value) }} className="input-text" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="woocommerce-shipping-fields"></div>
                                        <div className="woocommerce-additional-fields">
                                            <h3>Warrantied Property Address</h3>
                                            <p className="form-row form-row-wide">
                                                <label>Street address<abbr className="required" title="required">*</abbr></label>
                                                <input type="text" maxLength="55" className="input-text" value={prop_street1} onChange={(e) => { SetProp_Street1(e.target.value) }} placeholder="House number and street name"></input>
                                                <input type="text" maxLength="55" className="input-text" value={prop_street2} onChange={(e) => { SetProp_Street2(e.target.value) }} placeholder="Apartment, suite, unit, etc. (optional)"></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>City<abbr className="required" title="required">*</abbr></label>
                                                <input type="text" maxLength="15" className="input-text" value={prop_city} onChange={(e) => { SetProp_City(e.target.value) }}></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>State<abbr className="required" title="required">*</abbr></label>
                                                <select value={prop_state} onChange={(e) => { SetProp_state(e.target.value) }}>
                                                <option value="default">Select an state...</option>
                                                        {statelist.map((state) => (
                                                            <>
                                                                <option value={state.state_name} key={state.state_name}>{state.state_name}</option>
                                                            </>
                                                        ))}
                                                    </select>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Zip Code<abbr className="required" title="required">*</abbr></label>
                                                <input type="number" className="input-text" value={prop_zipcode} onChange={(e) => { SetProp_zipcode(e.target.value) }}></input>
                                            </p>
                                            <h3>Additional information</h3>
                                            <p className="form-row form-row-wide">
                                                <label>Order notes<span>(optional)</span></label>
                                                <textarea className="input-text" maxLength="50" rows="2" col="5" placeholder="Notes about your order, e.g. special notes for delivery." value={order_notes} onChange={(e) => { SetOrder_notes(e.target.value) }}></textarea>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <h3>Your order</h3>
                            <div className="order_review">
                                <table className="shop_table woocommerce-checkout-review-order-table">
                                    <thead>
                                        <tr>
                                            <th className="product-name">Product</th>
                                            <th className="product-total">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {localdata.map((item, index) => {
                                            const lm = `${item.monthly_price}`;
                                            const ly = `${item.yearly_price}`;
                                            let locm = parseFloat(lm).toFixed(2)
                                            let locy = parseFloat(ly).toFixed(2)
                                            return <tr className="cart_item" key={index}>
                                                <td className="product-name">
                                                    <div>
                                                        {item.name} - {val == 2 ? "Monthly" : "Annual"} ,{protype}
                                                        <strong className="product-quantity"> × 1</strong>
                                                        {covrage ? <Cove /> : null}
                                                    </div>
                                                </td>
                                                <td className="product-total">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <div className="maiprice"><span className="woocommerce-Price-currencySymbol">$</span>
                                                                {val === 2 ? locm : locy}
                                                            </div>
                                                            {covrage.map((pro, index) => {
                                                                const prom = `${pro.monthly_price}`;
                                                                const proy = `${pro.yearly_price}`;
                                                                let covm = parseFloat(prom).toFixed(2)
                                                                let covy = parseFloat(proy).toFixed(2)
                                                                let quapricey = covy * pro.quantity
                                                                let quapricem = covm * pro.quantity
                                                                let qpy = parseFloat(quapricey).toFixed(2)
                                                                let qpm = parseFloat(quapricem).toFixed(2)
                                                                return <div className="option" key={index}>
                                                                    <ul>
                                                                        {(pro.quantity > 0 && pro.quantity == 1) ? <li>{val == 2 ? <span>${covm}</span> : <span>${covy}</span>}</li> : ""}
                                                                        {(pro.quantity > 1) ? <li>{val == 2 ? <span>${qpm}</span> : <span>${qpy}</span>}</li> : ""}
                                                                    </ul>
                                                                </div>
                                                            })}
                                                        </bdi>
                                                    </span>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr className="cart-subtotal">
                                            <th>Subtotal</th>
                                            <td>
                                                <strong>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>
                                                            {(val === 2) ? totalMonthly : totalYearly}
                                                            {(val === 2) ? MonthlyPrice : YearlyPrice}
                                                        </bdi>
                                                    </span>
                                                </strong>
                                            </td>
                                        </tr>
                                        {couponres ? <tr className="order-discount">
                                            <th>Coupon:{coupon_code}</th>
                                            <td>
                                                <strong>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            {coupontype == "fixed" ? <span className="woocommerce-Price-currencySymbol">-${couponamount}</span> : null}
                                                            {coupontype == "percent" ? <span className="woocommerce-Price-currencySymbol">-${couponamountpercent}</span> : null}
                                                            <button className="removebtn" onClick={removeCoupon}>[Remove]</button>
                                                            <br></br>
                                                        </bdi>
                                                    </span>
                                                </strong>
                                            </td>
                                        </tr> : null}

                                        <tr className="order-total">
                                            <th>Total</th>
                                            <td>
                                                <strong>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>
                                                            {total}
                                                            <br></br>
                                                        </bdi>
                                                    </span>
                                                </strong>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="payment_option">
                                <label><Radio.Group onChange={PaymentOption} value={pay_method}>
                                    <label><Radio value="card">card</Radio></label></Radio.Group></label>
                            </div>
                            <p className="error-msg">{paymsg}</p>
                            {paymentresult == false ? <p className="error-msg">{payres}</p> : null}
                            <div className="woocommerce-checkout-payment">
                                <ul className="wc_payment_methods payment_methods methods">
                                    <li className={pay_method == "card" ? "wc_payment_method payment_method_authorize_net_aim showcard" : "hidecard"}>
                                        <input type="radio" className="input-radio" name="payment_method" />
                                        <label>
                                            Credit Card <img src={visa} alt="visa" />
                                            <img src={master} alt="master" />
                                            <img src={american} alt="american" />
                                            <img src={discover} alt="discover" />
                                            <img src={dinnerclub} alt="dinnerclub" />
                                            <img src={jcb} alt="jcb" />
                                        </label>
                                        <div className="payment_box payment_method_authorize_net_aim">
                                            <p>Pay securely using your credit card.</p>
                                            <fieldset>
                                                <div className="payment-method-form">
                                                    <p className="form-row form-row-wide">
                                                        <label>Card Number</label>
                                                        <abbr className="required" title="required">*</abbr>
                                                        <input type="text" maxLength="16" pattern="[0-9]" placeholder="xxxx xxxx xxxx xxxx" value={cc_number} onChange={(e) => { setcc_number(e.target.value) }} />
                                                    </p>
                                                    <div>
                                                        <div className="form_month form-row-first">
                                                            <label>Expiration (MM/YY) </label>
                                                            <abbr className="required" title="required">*</abbr>
                                                            <div className="monthyear">
                                                                <select className="monthselect" value={expiry_month} onChange={(e) => { setexpiry_month(e.target.value) }}>
                                                                    <option value=""></option>
                                                                    <option value="01">01</option>
                                                                    <option value="02">02</option>
                                                                    <option value="03">03</option>
                                                                    <option value="04">04</option>
                                                                    <option value="05">05</option>
                                                                    <option value="06">06</option>
                                                                    <option value="07">07</option>
                                                                    <option value="08">08</option>
                                                                    <option value="09">09</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                                <select className="yearselect" value={expiry_year} onChange={(e) => { setexpiry_year(e.target.value) }}>
                                                                    <option value=""></option>
                                                                    <option value="2021">2021</option>
                                                                    <option value="2022">2022</option>
                                                                    <option value="2023">2023</option>
                                                                    <option value="2024">2024</option>
                                                                    <option value="2015">2025</option>
                                                                    <option value="2016">2026</option>
                                                                    <option value="2017">2027</option>
                                                                    <option value="2018">2028</option>
                                                                    <option value="2019">2029</option>
                                                                    <option value="2020">2030</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <p className="form-row form-row-last">
                                                            <label>Card Security Code </label>
                                                            <abbr className="required" title="required">*</abbr>
                                                            <input type="text" maxLength="3" placeholder="CSC" value={cvv} onChange={(e) => { setcvv(e.target.value) }} />
                                                        </p>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </li>
                                </ul>
                                <div className="form-row place-order">
                                    <div className="woocommerce-terms-and-conditions-wrapper">
                                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our </p>
                                    </div>
                                    <button type="submit" onClick={saveData} disabled={disbtn} className="button alt" value="Place order">Place order</button>
                                    {isLoading == true ? <ReactBootStrap.Spinner animation="border" /> : null}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}
export default CheckOut;