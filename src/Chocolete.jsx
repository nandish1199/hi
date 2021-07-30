import React from "react";
import { NavLink } from "react-router-dom";
import "./css/A2ghee.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Table, Tab, Tabs } from "react-bootstrap";
import a1 from "./images/indi-products/choco/belgian1.jpg";
import b1 from "./images/indi-products/choco/belgian2.jpg";
import a2 from "./images/indi-products/choco/justurf1.jpg";
import b2 from "./images/indi-products/choco/justurf2.jpg";
import a3 from "./images/indi-products/choco/lindt1.jpg";
import b3 from "./images/indi-products/choco/lindt2.jpg";

const A2ghee = () => {
  const arr = [
    {
      name: "Belgian",
      price: 395,
      id: "details1",
      // img1: "./images/indi-products/choco/belgian1.jpg",
      // img2: "./images/indi-products/choco/belgian2.jpg",
      carddetailsrc: "#details1",
      buysrc:
        "https://www.flipkart.com/belgian-no-sugar-added-dark-chocolate-bars/p/itmf9c6wz8xpsa6e",
    },
    {
      name: "Jus'Truf",
      price: 390,
      id: "details2",
      // img1: "./images/indi-products/choco/justurf1.jpg",
      // img2: "./images/indi-products/choco/justurf2.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.amazon.in/Jus-Trufs-Artisanal-Chocolate-Cooking/dp/B078KY1FPN",
    },
    {
      name: "Lindt",
      price: 290,
      id: "details3",
      // img1: "./images/indi-products/choco/lindt1.jpg",
      // img2: "./images/indi-products/choco/lindt2.jpg",
      carddetailsrc: "#details3",
      buysrc:
        "https://www.flipkart.com/lindt-85-cocoa-dark-chocolate-100g-bars/p/itmffpghmqemk7jg?pid=CHCFF8QWESDTZNXY&lid=LSTCHCFF8QWESDTZNXYSXZED2&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ACHCFFKFSN4RMDFQC%3Bpt%3App%3Buid%3A57a9d6ff-c38f-11eb-ae1e-a933dbf38a79%3B.CHCFF8QWESDTZNXY&ppt=pp&ppn=pp&ssid=sdhayevu2o0000001622630587367&otracker=pp_reco_Similar%2BProducts_2_34.productCard.PMU_HORIZONTAL_LINDT%2B85%2525%2BCocoa%2BDark%2BChocolate%2B100g%2BBars_CHCFF8QWESDTZNXY_productRecommendation%2Fsimilar_1&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_2_NA_view-all&cid=CHCFF8QWESDTZNXY",
    },
  ];
  var arobja = [a1, a2, a3];
  var arobjb = [b1, b2, b3];
  var n = 0;
  var m = 0;

  return (
    <container>
      <div className="row mx-auto">
        <h1 className="mainHead mb-3">Best Chocolete</h1>
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
