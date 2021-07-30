import React from "react";
import { NavLink } from "react-router-dom";
import "./css/A2ghee.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Table, Tab, Tabs } from "react-bootstrap";

const A2ghee = () => {
  const arr = [
    {
      name: "Khadi",
      price: 144,
      id: "details1",
      img1: "images/indi-products/shampoo/khadi1.jpg",
      img2: "images/indi-products/shampoo/khadi2.jpg",
      carddetailsrc: "#details1",
      buysrc:
        "https://www.amazon.in/Khadi-Natural-Bhringraj-Shampoo-Cleanser/dp/B008KH65UE",
    },
    {
      name: "Havinta",
      price: 251,
      id: "details2",
      img1: "images/indi-products/shampoo/havinta1.jpg",
      img2: "images/indi-products/shampoo/havinta2.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.amazon.in/Havintha-Natural-Advanced-Shampoo-Shikakai/dp/B07ZJRKDYJ",
    },
    {
      name: "Maha Gro",
      price: 249,
      id: "details3",
      img1: "images/indi-products/shampoo/mahagro.jpeg",
      img2: "images/indi-products/shampoo/mahagro2.jpeg",
      carddetailsrc: "#details3",
      buysrc: "https://www.flipkart.com/mahagro-hair-wash/p/itmewf64kkzptspy",
    },
    {
      name: "Earthy-Sapo",
      price: 159,
      id: "details4",
      img1: "images/indi-products/shampoo/earthysapo1.jpg",
      img2: "images/indi-products/shampoo/earthysapo2.jpg",
      carddetailsrc: "#details4",
      buysrc:
        "https://www.amazon.in/Earthy-Sapo-Reetha-Shampoo-Bar/dp/B06XHVZYLN",
    },
    {
      name: "Just Herbs",
      price: 159,
      id: "details5",
      img1: "images/indi-products/shampoo/justherbs1.jpg",
      img2: "images/indi-products/shampoo/justherbs2.jpg",
      carddetailsrc: "#details5",
      buysrc:
        "https://www.amazon.in/Just-Herbs-Nourishing-Shampoo-Green/dp/B00NMKTK60",
    },
  ];
  return (
    <container>
      <div className="row mx-auto">
        <h1 className="mainHead mb-3">Best Snacks</h1>
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
                      <td>Mineral Oil</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Harmful Fragrance</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Sulphate</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Benzoic Acid</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Propanediol</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Flouride</td>
                      <td>No</td>
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
                        and it is a genuine product.
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
