import React from "react";
import { NavLink } from "react-router-dom";
import "./css/A2ghee.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Table, Tab, Tabs } from "react-bootstrap";
import a1 from "./images/indi-products/biscuits/grandma1.jpg";
import b1 from "./images/indi-products/biscuits/grandma2.jpg";
import a2 from "./images/indi-products/biscuits/grainnys1.jpg";
import b2 from "./images/indi-products/biscuits/grainnys2.jpg";
import a3 from "./images/indi-products/biscuits/earlyfruit2.jpg";
import b3 from "./images/indi-products/biscuits/earlyfruit2.jpg";
import a4 from "./images/indi-products/biscuits/tots1.jpg";
import b4 from "./images/indi-products/biscuits/tots2.jpeg";
import a5 from "./images/indi-products/biscuits/john1.jpg";
import b5 from "./images/indi-products/biscuits/john2.jpg";
const A2ghee = () => {
  const arr = [
    {
      name: "Grandmaa millets",
      price: 260,
      id: "details1",
      img1: "images/indi-products/biscuits/grandma1.jpg",
      img2: "images/indi-products/biscuits/grandma2.jpg",
      carddetailsrc: "#details1",
      buysrc:
        "https://www.flipkart.com/grandmaa-millets-ragi-desi-cow-ghee-cookies-high-fiber-delicious-cookies/p/itm54b196310f68e",
    },
    {
      name: "Grainny's",
      price: 0,
      id: "details2",
      img1: "images/indi-products/biscuits/grainnys1.jpg",
      img2: "images/indi-products/biscuits/grainnys2.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.amazon.in/Grainnys-Organic-Whole-Grain-Amaranth-Cookies/dp/B07815L6LP",
    },
    {
      name: "Early Foods",
      price: 199,
      id: "details3",
      img1: "images/indi-products/biscuits/earlyfruit2.jpg",
      img2: "images/indi-products/biscuits/earlyfruit1.png",
      carddetailsrc: "#details3",
      buysrc:
        "https://www.amazon.in/Early-Foods-Organic-Jaggery-Cookies/dp/B01MZXGULF",
    },
    {
      name: "Tots And Moms",
      price: 200,
      id: "details4",
      img1: "images/indi-products/biscuits/tots1.jpg",
      img2: "images/indi-products/biscuits/tots2.jpeg",
      carddetailsrc: "#details4",
      buysrc:
        "https://www.flipkart.com/tots-moms-healthy-nutritional-millet-jaggery-cookies-sweet-savory/p/itm662816c929602?pid=CKBFZ8H8FFB2DDYY&lid=LSTCKBFZ8H8FFB2DDYYLLEGZC&marketplace=FLIPKART&cmpid=content_cookie-biscuit_9984742535_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,433814189993,,,,c,,,,,,,&ef_id=Cj0KCQjw2NyFBhDoARIsAMtHtZ5SqphA4Htt1V2f3jTAxuXPOeeKKetnFshLcbXk5m18z50kFYTW920aAvhgEALw_wcB:G:s&s_kwcid=AL!739!3!433814189993!!!u!297150742451!&gclid=Cj0KCQjw2NyFBhDoARIsAMtHtZ5SqphA4Htt1V2f3jTAxuXPOeeKKetnFshLcbXk5m18z50kFYTW920aAvhgEALw_wcB&gclsrc=aw.ds",
    },
    {
      name: "John Garden",
      price: 0,
      id: "details5",
      img1: "images/indi-products/biscuits/john1.jpg",
      img2: "images/indi-products/biscuits/john2.jpg",
      carddetailsrc: "#details5",
      buysrc:
        "https://www.amazon.sg/John-Garden-Multi-Grain-Biscuit/dp/B07ZMRTP38",
    },
  ];
  var arobja = [a1, a2, a3, a4, a5];
  var arobjb = [b1, b2, b3, b4, b5];
  var n = 0;
  var m = 0;
  return (
    <container>
      <div className="row mx-auto">
        <h1 className="mainHead mb-3">Best Biscuits</h1>
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
                    {/* <tr>
                    <td>Price</td>
                    <td>{price}&#8377; per 500gms</td>
                  </tr> */}
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
                      <td>Refined Flour</td>
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
