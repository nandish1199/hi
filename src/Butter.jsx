import React from "react";
import { NavLink } from "react-router-dom";
import "./css/A2ghee.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Table, Tab, Tabs } from "react-bootstrap";
import a1 from "./images/indi-products/butter/vita1.jpg";
import b1 from "./images/indi-products/butter/vita2.jpg";
import a2 from "./images/indi-products/butter/verka1.jpg";
import b2 from "./images/indi-products/butter/verka2.jpg";
import a3 from "./images/indi-products/butter/dms1.jpg";
import b3 from "./images/indi-products/butter/dms2.jpg";
import a4 from "./images/indi-products/butter/mother1.jpg";
import b4 from "./images/indi-products/butter/mother2.jpg";
import a5 from "./images/indi-products/butter/govardhan1.jpg";
import b5 from "./images/indi-products/butter/govardhan2.jpg";
const A2ghee = () => {
  const arr = [
    {
      name: "Vita",
      price: 48,
      id: "details1",
      img1: "images/indi-products/butter/vita1.jpg",
      img2: "images/indi-products/butter/vita2.jpg",
      carddetailsrc: "#details1",
      buysrc: "https://www.vitaindia.org.in/product-category/table-butter",
    },
    {
      name: "Verka",
      price: 93,
      id: "details2",
      img1: "images/indi-products/butter/verka1.jpg",
      img2: "images/indi-products/butter/verka2.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.bigbasket.com/pd/40103537/verka-butter-100-g-carton/",
    },

    {
      name: "DMS",
      price: 46,
      id: "details3",
      img1: "images/indi-products/butter/dms1.jpg",
      img2: "images/indi-products/butter/dms2.jpg",
      carddetailsrc: "#details3",
      buysrc: "https://mydukaan.io/delhi6/products/namkeen-butter",
    },
    {
      name: "Mother",
      price: 44,
      id: "details4",
      img1: "images/indi-products/butter/mother1.jpg",
      img2: "images/indi-products/butter/mother2.jpg",
      carddetailsrc: "#details4",
      buysrc:
        "https://www.flipkart.com/mother-dairy-pasteurised-salted-butter/p/itmaac9865b2cd29",
    },
    {
      name: "Gowardhan",
      price: 43,
      id: "details5",
      img1: "images/indi-products/butter/govardhan1.jpg",
      img2: "images/indi-products/butter/govardhan2.jpg",
      carddetailsrc: "#details5",
      buysrc:
        "https://www.amazon.in/Gowardhan-Butter-Pouch-100-g/dp/B084BHQSVP",
    },
    {
      name: "Amul",
      price: 43,
      id: "details6",
      img1: "images/indi-products/butter/amul1.jpg",
      img2: "images/indi-products/butter/amul2.jpg",
      carddetailsrc: "#details6",
      buysrc:
        "https://www.amazon.in/Gowardhan-Butter-Pouch-100-g/dp/B084BHQSVP",
    },
  ];
  var arobja = [a1, a2, a3, a4, a5];
  var arobjb = [b1, b2, b3, b4, b5];
  var n = 0;
  var m = 0;
  return (
    <container>
      <div className="row mx-auto">
        <h1 className="mainHead mb-3">Best Butter</h1>
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
                  variant="light"
                >
                  <thead>
                    <tr>
                      <th colSpan="2">{name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Price</td>
                      <td>{price}&#8377;</td>
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
                      <td>Artificial Flavour</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Added Shugar</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>MSG</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>emulsifier</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Added oil</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Hydrogenated Oil</td>
                      <td>No</td>
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
                        and it also tastes very good.
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
