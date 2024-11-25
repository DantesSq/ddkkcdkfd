import React from "react";
import data from "../data.json";
const GroceryAisles = () => {
  console.log(data);
  return (
    <section className="grocery-aisles" id="shop">
      <h1>Grocery Aisles</h1>
      <div className="grocery-aisles-products">
        {data.map((item) => {
          return (
            <div key={item.name} className="grocery-product">
              <div className="grocery-img">
                <img src={item.src} alt="" />
              </div>
              <div className="grocery-text">
                <p>{item.name}</p>
                <p className="grocery-price">from {item.minPrice}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GroceryAisles;
