import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Cart({ cart, coverage, setCart, value, hometype }) {
  localStorage.removeItem('MonthlyPrice');
  localStorage.removeItem('YearlyPrice');
  let history = useHistory();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // localStorage.clear()
  const Toalpricemonthly = () => {
    if(coverage){
    return  coverage.reduce((sum, i) => (
      sum += i.quantity * i.monthly_price
    ), 0).toFixed(2)}
  }

    const Toalpriceyearly = () => {
      if(coverage){
      return  coverage.reduce((sum, i) => (
        sum += i.quantity * i.yearly_price
      ), 0).toFixed(2)}}

  const getTotalSumYearly = () => {
    return cart.reduce(
      (sum, { yearly_price }) => sum + yearly_price,
      ""
    ); 
  };

  const getTotalSumMonthly = () => {
    return cart.reduce(
      (sum, { monthly_price }) => sum + monthly_price,
      ""
    );
  };

  let yy = getTotalSumYearly()
  let yprice = parseFloat(yy).toFixed(2)
  let mm = getTotalSumMonthly()
  let mprice = parseFloat(mm).toFixed(2)



 const totalMonthly = parseFloat(Toalpricemonthly())+parseFloat(getTotalSumMonthly())
 let tm = parseFloat(totalMonthly).toFixed(2)
 const totalYearly = parseFloat(Toalpriceyearly())+parseFloat(getTotalSumYearly())
 let ty = parseFloat(totalYearly).toFixed(2)
 useEffect(()=>{
  if(coverage){
  localStorage.setItem('totalMonthly',JSON.stringify(tm))
  localStorage.setItem('totalYearly',JSON.stringify(ty))
  }
})

useEffect(()=>{
  if(!coverage){
  localStorage.setItem('MonthlyPrice',JSON.stringify(mprice))
  localStorage.setItem('YearlyPrice',JSON.stringify(yprice))
}})

  const clearCart = () => {
    setCart([]);
  };
const Cove = ()=>(
  <>
   {coverage.map((pro, index) => (
          <div className="option" key={index}>
            <ul>{pro.quantity > 0 ? <li>{pro.quantity}x{pro.name} </li> :""}</ul>
          </div>
        ))}
  </>
)

  return (
    <>
      <h4>Cart</h4>
      <div className="products">
        {cart.map((product, index) => (
          <div className="option" key={index}>
            <ul><li>1x {hometype} {product.name}</li></ul>
          </div>
        ))}

        {coverage ? <Cove/> : null }
       
      </div>
      
      <div className="total">
        <h4>Total</h4>
        {(coverage) && (value == 1) ? <span>${totalYearly.toFixed(2)} /YR</span> : null}
        {(coverage) && (value == 2) ? <span>${totalMonthly.toFixed(2)} /MO</span> : null}
        {(!coverage) && (value == 1) ? <span>${yprice} /YR</span> : null}
        {(!coverage) && (value == 2) ? <span>${mprice}  /MO</span> : null}
      </div>

    </>
  );
}