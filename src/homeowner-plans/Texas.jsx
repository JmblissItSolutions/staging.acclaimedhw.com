import React, { useState, useEffect } from "react";
import APIUrl from "../Api"
import { BrowserRouter as Router, useHistory, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import UtahHomeowner from "./../assets/images/UtahHomeowner.png"
import { StarFilled, CheckOutlined } from '@ant-design/icons';
import lattice from "../assets/images/lattice-background.png"
import { Radio } from 'antd';
import UniqueFeature from "./UniqueFeature"
import StandarFeature from './StandardFeature'
import Cart from "./Cart"
const Texas = () => {
  // const [products, setproducts] = useState([]);
  const [product, setproduct] = useState("Single Family");

  const handleChangeCourse = event => {
    setproduct(event.target.value);
  };
  const getUnique = (arr, comp) => {
    const unique = arr
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  }
  const [uniquefeature, setUnique] = useState([]);
  useEffect(async () => {
    const uniquefeature = await APIUrl.get(`/get_location_unique_features/4`)
    setUnique(uniquefeature.data);
  }, []);

  const [products, setproducts] = useState([]);
  useEffect(async () => {
    const products = await APIUrl.get(`/get_hoproducts/4`)
    setproducts(products.data);
  }, []);
  const uniqueCouse = getUnique(products, "unit_type");
  const filterDropdown = products.filter(function (products) {
    return products.unit_type === product;
  });

  // above all code for filter only dont touch above
  //  code you can add you code belove this line

  const location = useLocation();
  const sel = location.pathname;

  let history = useHistory();
  function handleChange(e) {
    history.push(e.target.value);
  }

  const [showPlans, setShowPlans] = useState("ProductsInfo")
  const [showId, setId] = useState("0")
  const [index, setIndex] = useState("")
  const changehandle = (e) => {
    setShowPlans("Plans")
    setId(e.target.id)
    setIndex(e.target.getAttribute("data-index"));
  };
  const [value, setValue] = useState(1);
  const onChange = e => {
    setValue(e.target.value);
  };
  const [coverage, setCoverage] = useState([]);
  useEffect(async () => {
    const url = "/get_hoproducts_covup/" + `${showId}`
    const coverages = await APIUrl.get(`${url}`)
    setCoverage(coverages.data);
  }, [showId]);
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    setCart([...cart, product])
  };

  const clearCart = () => {
    setCart([]);
  };
  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value]);
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);
  useEffect(() => {
    localStorage.setItem("coverage", JSON.stringify(coverage));
  }, [coverage]);

  const QuantityIncrease = (i) => {
    const newItems = [...coverage];
    newItems[i].quantity++;
    setCoverage(newItems);
  };
  const QuantityDecrease = (i) => {
    const newItems = [...coverage];
    if (newItems[i].quantity > 0) {
      newItems[i].quantity--;
      setCoverage(newItems);
    }
  };
  const stateid = 4
  const Produfilter = () => (
    <>
      <section className="top-image">
        <img src={UtahHomeowner} alt="UtahHomeowner" />
      </section>
      <section className="plans-title">
        <div className="container text-center mx-900">
          <h1 className="upper">Plans for every home</h1>
          <p className="text-center sub-txt">We want you to feel confident in your home—that’s why we provide a variety of coverage options for different needs. While all of our plans cover a variety of appliances and accessories, you can choose a more extensive option to make sure every item in your home is in good hands.</p>
        </div>
      </section>
      <section className="change-location-header">
        <div className="container d-flex just-space">
          <span className="big upper">Texas Homeowner Plans</span>
          <div className={showPlans == "Plans" ? 'hidefilter' : null}>
            <div>
              <span>Unit Size</span>
              <select value={product} onChange={handleChangeCourse}>
                {uniqueCouse.map(product => (
                  <option key={product.id} value={product.unit_type}>
                    {product.unit_type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span style={{ display: "block" }}>
                Location
              </span>
              <select name="size" className="" onChange={handleChange} defaultValue={sel}>
                <option value="/homeowner-plans/utah">Utah</option>
                <option value="/homeowner-plans/nevada">Nevada</option>
                <option value="/homeowner-plans/texas">Texas</option>
                <option value="/homeowner-plans/arizona">Arizona</option>
                <option value="/homeowner-plans/idaho">Idaho</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  )
  const ProductsInfo = () => (
    <>
      <section className="light-back plan-options">
        <div className="container">
          <div className="table-cont">
            <h2 className="upper table-left">plan options<br />
              <span>{product}</span></h2>
            <div className="option-cont table-right">
              {filterDropdown.map((product, index) => (
                <div className="option" key={product.id}>
                  <div className="star-cont">
                    {Array.apply(1, Array(index + 1)).map(function (x, i) {
                      return <StarFilled key={i} className="antstar" />;
                    })}
                  </div>
                  <div className="body">
                    <h6 className="upper">{product.name}</h6>
                    {product.monthly_price !== "0" ? <h4 className="lato">${product.monthly_price}
                      <span style={{ fontSize: "0.4em" }}>/MO</span></h4> :
                      <h4 className="lato">${product.yearly_price}
                        <span style={{ fontSize: "0.4em" }}>/YR</span></h4>}
                    {product.monthly_price !== "0" ? <h5 className="lato">${product.yearly_price}/YR</h5> : null}
                    <button className="buybtn" onClick={() => { addToCart(product) }}> <input className="buyinput" type="submit" id={product.id} data-index={index} value="Buy Now"
                      onClick={changehandle} /></button>
                  </div>
                </div>
              ))}
            </div>
            <hr className="textured" />
          </div>
        </div>
      </section>
      <StandarFeature stateid={stateid} />
      {product === "Single Family" ?
        <UniqueFeature uniquefeature={uniquefeature} filterDropdown={filterDropdown} />
        : ""}
    </>
  );
  const Texasdata = () => {
    return (
      <>
        <div className="upgrade_list">
          {coverage.map((dataIn, i) =>
            <div key={i} className="upgrade">
              <div className="quntity_box">
                <span> {dataIn.quantity} </span>
                <button className="qua_btn" onClick={() => QuantityIncrease(i)} >+</button>
                <button className="qua_btn" onClick={() => QuantityDecrease(i)}>-</button>
              </div>
              {value == 1 ? <span id={dataIn.id} data-num={dataIn.id} className="price">${dataIn.yearly_price}</span> : null}
              {value == 2 ? <span id={dataIn.id} data-num={dataIn.id} className="price">${dataIn.monthly_price}</span> : null}
              <span className="name">{dataIn.name}</span>
            </div>
          )}
        </div>
      </>
    );
  };
  const Plans = () => (
    <>
      <div id="plans" className="search-results">
        <section id="upgrades_and_cart">
          <div className="container">
            <h2>You have selected the<strong> {product} {products[index].name} </strong>plan</h2>
            <div className="plan_interval">
              <p style={{ margin: "0px", textalign: "center", fontsize: "18px" }}></p>
              <strong>Payment Options:</strong>
              <span className="spacer"></span>
              <label><Radio.Group onChange={onChange} value={value}>
                {filterDropdown[index].yearly_price ? <label><Radio value={1}>${filterDropdown[index].yearly_price} /YR</Radio></label> : null}
                {filterDropdown[index].monthly_price !== "0" ? <label><Radio value={2}>${filterDropdown[index].monthly_price} /MO</Radio></label> : null}</Radio.Group></label>
            </div>
          </div>
          <div className="textured-back" style={{ backgroundImage: `url(${lattice})` }}>
            <div className="container">
              <h3>COVERAGE UPGRADES</h3>
              <h4>SELECT ADDITIONAL ITEMS TO CUSTOMIZE YOUR PLAN</h4>
            </div>
          </div>
          <div className="container">
            <div className="upgrade_cont">
              <Texasdata />
            </div>
            <div className="bottom-cont" />
            <div className="cart">
              <Cart cart={cart} setCart={setCart} value={value} hometype={product} coverage={coverage} />
            </div>
            <div className="footy">
              <button value={value} onClick={() => history.push("/homeowner-plans/checkout/")} className="btn">Check out</button>
              <button className="redirectcancel" onClick={() => setShowPlans("ProductsInfo")}>
                <input className="btn cancel" defaultValue="Cancel"
                  onClick={clearCart} /></button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
  return (
    <>
      <Helmet>
        <title>See Benefits and Resource Guides for Home Warranty Services in Arizona</title>
        <meta name="description" content="Acclaimed Home Warranty has shared some of the useful resources for those looking out for home warranty plans in Arizona. Contact us today for more information." />
      </Helmet>
      <div className="product_page">
        <Produfilter />
        {showPlans === "ProductsInfo" && <ProductsInfo />}
        {showPlans === "Plans" && <Plans />}
      </div>
    </>
  )
}
export default Texas;