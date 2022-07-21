import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart]= useState(false);
  const cartStatus = inCart ? "in-cart" : "";
  const btnStatus = inCart ? "remove" : "add";
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnStatus} onClick={()=> {
        setCart(!inCart)
      }}>Add to Cart</button>
    </li>
  );
}

export default Item;
