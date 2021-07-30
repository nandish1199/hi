import React from "react";
import { NavLink } from "react-router-dom";
import "./css/A2ghee.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Table, Tab, Tabs } from "react-bootstrap";
import a1 from "./images/indi-products/water/railneer4.jpg";
import b1 from "./images/indi-products/water/railneer1.png";
import a2 from "./images/indi-products/water/bisleri1.jpg";
import b2 from "./images/indi-products/water/bisleri2.png";
import a3 from "./images/indi-products/water/mcdowells1.jpg";
import b3 from "./images/indi-products/water/mcdowells2.png";
import a4 from "./images/indi-products/kamdhenughee.jpg";
import b4 from "./images/indi-products/kamdhenughee-ing.png";
import a5 from "./images/indi-products/anveshanghee.jpg";
import b5 from "./images/indi-products/anveshanghee-ing.jpg";
const A2ghee = () => {
  const arr = [
    {
      name: "Rail neer",
      price: 15,
      id: "details1",
      img1: "images/indi-products/water/railneer4.jpg",
      img2: "images/indi-products/water/railneer1.png",
      carddetailsrc: "#details1",
      buysrc:
        "https://www.amazon.in/Kapiva-Shudh-Reduces-Improves-Functioning/dp/B07GWPCCGX",
    },
    {
      name: "Bisleri",
      price: 20,
      id: "details2",
      img1: "images/indi-products/water/bisleri1.jpg",
      img2: "images/indi-products/water/bisleri2.png",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.amazon.in/Vedic-Ghee-Kesariya-Farm-500ml/dp/B07C7LRGBW",
    },
    {
      name: "Mc Dowell's",
      price: 12,
      id: "details3",
      img1: "images/indi-products/water/mcdowells1.jpg",
      img2: "images/indi-products/water/mcdowells2.png",
      carddetailsrc: "#details3",
      buysrc: "https://www.amazon.in/Shree-Radhey-Gir-Cow-ghee/dp/B07FP6Z9KR",
    },
  ];
  var arobja = [a1, a2, a3, a4, a5];
  var arobjb = [b1, b2, b3, b4, b5];
  var n = 0;
  var m = 0;
  return (
    <container>
      <div className="row mx-auto">
        <h1 className="mainHead mb-3">Best Water</h1>
        {arr.map((ele) => {
          const { img1, carddetailsrc, name, buysrc, price } = ele;
          var imgarr = arobja[n];
          n = n + 1;
          return (
            <div className="card_container my-2">
              <card1 className="product_card">
                <div className="card_head">
                  <h2>{name}</h2>
                  <div className="card_links">
                    <h4 className="ml-3">Price -{price}&#8377;</h4>
                    {/* <a className="shadow" href={carddetailsrc}>
                    Details <i class="fas fa-info-circle"></i>
                  </a> */}
                    <a className="shadow" href={buysrc} target="_blank">
                      Buy link <i class="fas fa-shopping-bag"></i>
                    </a>
                  </div>
                </div>
                <img
                  className="product_img"
                  src={imgarr}
                  alt="image"
                  loading="lazy"
                />
              </card1>
            </div>
          );
        })}
        <h1 className="mainHead my-3">Details</h1>
        {/* ############################################Details###################################### */}
        {arr.map((ele) => {
          let { id, name, price, img1, img2 } = ele;
          let imgarr1 = arobja[m];
          let imgarr2 = arobjb[m];
          m = m + 1;
          return (
            <>
              <h1 className="detailhead" id={id}>
                {name}
              </h1>
              <div className="details1 my-3">
                <Carousel className="carousel_pro" interval={1000}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={imgarr1}
                      alt="First slide"
                      loading="lazy"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={imgarr2}
                      alt="Second slide"
                      loading="lazy"
                    />
                  </Carousel.Item>
                </Carousel>

                <Table
                  className="table_details"
                  striped
                  bordered
                  hover
                  variant="dark"
                >
                  <thead>
                    <tr>
                      <th colSpan="2">{name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Price</td>
                      <td>{price}&#8377; per 1L</td>
                    </tr>
                    <tr>
                      <td>Preservatives</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Added Colour</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Microbiological Activity</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Pesticide Residues</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Toxic Heavy Metals</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Undesirable Substance</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Nitrate</td>
                      <td> less than 45mg/liter</td>
                    </tr>
                    <tr>
                      <td>Flouride</td>
                      <td> less than 1mg/liter</td>
                    </tr>
                    <tr>
                      <td>Silver</td>
                      <td> less than 0.1mg/liter</td>
                    </tr>
                    <tr>
                      <td>Chloride</td>
                      <td> less than 200mg/liter</td>
                    </tr>
                    <tr>
                      <td>Sulphate</td>
                      <td> less than 200mg/liter</td>
                    </tr>
                    <tr>
                      <td>Alkaline</td>
                      <td> less than 200mg/liter</td>
                    </tr>
                    <tr>
                      <td>
                        Mercury,Cadmium, <br />
                        Arsenic,Cyanide,
                        <br />
                        Lead,Chromium,Nickel
                      </td>
                      <td> No</td>
                    </tr>
                    <tr>
                      <td>PH </td>
                      <td>Good 6-8</td>
                    </tr>
                    <tr>
                      <td>Taste</td>
                      <td>Very Good</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="details_para">
                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                  >
                    <Tab eventKey="home" title="Discription">
                      <p>
                        I used this product according to my openion its a very
                        good product, i found no adultration as per my knowledge
                        and it also tastes and smells exactly like the A2 ghee i
                        have tasted it.
                      </p>
                    </Tab>
                    <Tab eventKey="profile" title="Declaration">
                      <p>
                        I hereby declare that this brand has not paid me. I am
                        just a consumer like you and providing my own tested
                        openion on these products.
                      </p>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </container>
  );
};
export default A2ghee;
