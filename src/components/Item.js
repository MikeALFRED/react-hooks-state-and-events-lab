import React, { useState } from "react";

function Item({ name, category }) {
  let[isIncart, setIsCart]= useState(false)

  function handleTAddToCartClick(){
    setIsCart((isInCart) => !isInCart)
  }
  return (
    <li className= {isIncart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isIncart ? "remove" : "add"}
              onClick={handleTAddToCartClick}
      
      > {isIncart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
