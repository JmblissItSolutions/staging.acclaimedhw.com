import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Shop =()=>{
  const [checked, setChecked] = useState([]); // categories
  const [categories, setCategories] = useState([
    { name: "Product A", isAdded: false }, 
    { name: "Product B", isAdded: false }, 
    { name: "Product C", isAdded: false }
  ]);
 
const tt =  checked.join(', ')
  const handleToggle = c => () => {
    // return the first index or -1
    const clickedCategory = checked.indexOf(c);
    const all = [...checked];

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log(all);
    setChecked(all);
  };

  const showCategories = () => {
    return categories.map((c, i) => (
      <li key={i} className="list-unstyled">
        <input
          onChange={handleToggle(c.name)}
          type="checkbox"
          className="mr-2"
        />
        <label className="form-check-label">{c.name}</label>
      </li>
    ));
  };

  return (
    <div className="container">
      <h2>Categories</h2>
      {showCategories()}
      <h2>Form Data</h2>
      {tt}
      
     
    </div>
  );
};
export default Shop;