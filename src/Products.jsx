import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Products.css";
import Products_obj from "./Products_obj";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import a1 from "./images/products/ghee.jpg";
import a2 from "./images/products/noodles.jpg";
import a3 from "./images/products/hair_oil.jpg";
import a4 from "./images/products/toothpaste.jpg";
import a5 from "./images/products/moisturizer.png";
import a6 from "./images/products/chocolete.png";
import a7 from "./images/products/butter.jpg";
import a8 from "./images/products/tea.jpg";
import a9 from "./images/products/water.png";
import a10 from "./images/products/snacks.jpg";
import a11 from "./images/products/cold_drink.png";
import a12 from "./images/products/snacks.jpg";
import a13 from "./images/products/biscuit.jpg";
import a14 from "./images/products/bath_soap.jpg";
import a15 from "./images/products/shampoo.png";
import a16 from "./images/products/essential_oil.jpg";
import a17 from "./images/products/hand_wash.jpg";

const Products = () => {
  const [items, setitems] = useState(Products_obj);
  const filterItem = (cate) => {
    const updatedItem = Products_obj.filter((currelem) => {
      return currelem.category === cate;
    });
    setitems(updatedItem);
  };
  let aron = [
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
    a14,
    a15,
    a16,
    a17,
  ];
  var n = 0;
  return (
    <container>
      {/* <div className="buttons text-center">
        <button onClick={() => setitems(Products_obj)}>All</button>
        <button onClick={() => filterItem("food")}> Food</button>
        <button onClick={() => filterItem("beauty")}> Beauty</button>
        <button onClick={() => filterItem("electronics")}> Electronics</button>
      </div> */}

      <section>
        {items.map((elem) => {
          const { image, heading, p, url } = elem;

          let imgarr = aron[n];
          n += 1;

          return (
            <div className="product_card shadow">
              <div className="images_div">
                <img src={imgarr} alt="image" loading="lazy" />
                <div className="card_content">
                  <h2 className="ml-2">{heading}</h2>
                  <div className="in_card_content">
                    <p className="ml-2">{p}</p>
                    <NavLink className="card_nav shadow" exact to={url}>
                      See
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </container>
  );
};
export default Products;
