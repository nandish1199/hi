import React from "react";
import { NavLink } from "react-router-dom";
import "./css/A2ghee.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Table, Tab, Tabs } from "react-bootstrap";

const A2ghee = () => {
  const arr = [
    {
      name: "Prestine",
      price: 93,
      id: "details1",
      img1: "images/indi-products/cereals/bignings1.jpeg",
      img2: "images/indi-products/cereals/bignings2.jpeg",
      carddetailsrc: "#details1",
      buysrc:
        "https://www.flipkart.com/pristine-beginnings/p/itmda2e78f0b1d2c?gclid=Cj0KCQjw2NyFBhDoARIsAMtHtZ4W93znAlLDAD6gzu5Qfl-SADrKtTDulLvOBHKGMqw3CiHMChHvSywaAiWFEALw_wcB&pid=CAFFP5VNKE67Z5HW&lid=LSTCAFFP5VNKE67Z5HWUW2KGK&marketplace=GROCERY&cmpid=content_cereal-flake_1377628020_g_8965229628_gmc_pla&tgi=sem,1,G,11214002,g,search,,491771363460,,,,c,,,,,,,&ef_id=Cj0KCQjw2NyFBhDoARIsAMtHtZ4W93znAlLDAD6gzu5Qfl-SADrKtTDulLvOBHKGMqw3CiHMChHvSywaAiWFEALw_wcB:G:s&s_kwcid=AL!739!3!491771363460!!!g!1129671380136!&gclsrc=aw.ds",
    },
    {
      name: "Go Bharati",
      price: 22,
      id: "details2",
      img1: "images/indi-products/cereals/gobharati1.jpg",
      img2: "images/indi-products/cereals/gobharati1.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.amazon.in/GoBhaarati-Ragi-Flakes-2x250-grams/dp/B01MR2TYEW",
    },
    {
      name: "Health Sutra",
      price: 60,
      id: "details3",
      img1: "images/indi-products/cereals/healthsutra1.jpg",
      img2: "images/indi-products/cereals/healthsutra2.jpg",
      carddetailsrc: "#details3",
      buysrc:
        "https://www.greenstation.co/products/health-sutra-jowar-flakes-poha-250g",
    },
    {
      name: "Patanjali",
      price: 175,
      id: "details4",
      img1: "images/indi-products/cereals/patanjali1.png",
      img2: "images/indi-products/cereals/patanjali2.jpg",
      carddetailsrc: "#details4",
      buysrc:
        "https://www.patanjaliayurved.net/product/natural-food-products/oats/patanjali-oats/1284",
    },
    {
      name: "Quaker",
      price: 77,
      id: "details5",
      img1: "images/indi-products/cereals/quaker1.jpeg",
      img2: "images/indi-products/cereals/quaker2.jpeg",
      carddetailsrc: "#details5",
      buysrc:
        "https://www.flipkart.com/quaker-oats/p/itmf3qzpykhzhyr2?gclid=Cj0KCQjw2NyFBhDoARIsAMtHtZ6DMs1l7u8zg1xgvMQRZziWIaBryUP2Egib77AXGkRIFkJ4m8F9vWIaAjYoEALw_wcB&pid=CAFEUD56GKJXXSNC&lid=LSTCAFEUD56GKJXXSNCVLM9PI&marketplace=GROCERY&cmpid=content_cereal-flake_1377628020_g_8965229628_gmc_pla&tgi=sem,1,G,11214002,g,search,,386809304761,,,,c,,,,,,,&ef_id=Cj0KCQjw2NyFBhDoARIsAMtHtZ6DMs1l7u8zg1xgvMQRZziWIaBryUP2Egib77AXGkRIFkJ4m8F9vWIaAjYoEALw_wcB:G:s&s_kwcid=AL!739!3!386809304761!!!g!740041772137!&gclsrc=aw.ds",
    },
  ];
  return (
    <container>
      <div className="row mx-auto">
        <h1 className="mainHead mb-3">Best Cereals</h1>
        {arr.map((ele) => {
          const { img1, carddetailsrc, name, buysrc, price } = ele;
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
                  src={img1}
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
                      src={img1}
                      alt="First slide"
                      loading="lazy"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={img2}
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
