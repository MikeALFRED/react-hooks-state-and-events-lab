import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let[selectedCtegory, setSelectedCatgory]= useState("All")

  function handleCategoryChange(event){

    setSelectedCatgory(event.target.value)
  }

  let itemsToDisplay = items.filter((item)=>{
    if(selectedCtegory === "All") return true
        
    return item.category ===selectedCtegory
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
