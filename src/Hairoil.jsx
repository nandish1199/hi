import React from "react";
import { NavLink } from "react-router-dom";
import "./css/A2ghee.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Table, Tab, Tabs } from "react-bootstrap";
import a1 from "./images/indi-products/hairoil/khadi1.jpg";
import b1 from "./images/indi-products/hairoil/khadi2.jpg";
import a2 from "./images/indi-products/hairoil/dabur1.jpg";
import b2 from "./images/indi-products/hairoil/dabur2.jpg";
import a3 from "./images/indi-products/hairoil/daburbadam1.jpeg";
import b3 from "./images/indi-products/hairoil/daburbadam2.jpg";
import a4 from "./images/indi-products/hairoil/patanjali1.png";
import b4 from "./images/indi-products/hairoil/patanjali2.jpg";
import a5 from "./images/indi-products/hairoil/baidyanath1.jpg";
import b5 from "./images/indi-products/hairoil/baidyanath2.jpg";
const A2ghee = () => {
  const arr = [
    {
      name: "Khadi",
      price: 199,
      id: "details1",
      img1: "images/indi-products/hairoil/khadi1.jpg",
      img2: "images/indi-products/hairoil/khadi2.jpg",
      carddetailsrc: "#details1",
      buysrc:
        "https://www.flipkart.com/khadi-herbal-amla-bhringraj-hair-oil/p/itmf3jyqamty6jyw",
    },
    {
      name: "Dabur",
      price: 128,
      id: "details2",
      img1: "images/indi-products/hairoil/dabur1.jpg",
      img2: "images/indi-products/hairoil/dabur2.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.flipkart.com/dabur-anmol-gold-pure-coconut-hair-oil/p/itmf3jyqybvhd5kg?pid=HOLEZGN3CDNNAPJC&lid=LSTHOLEZGN3CDNNAPJCKRWYNY&marketplace=GROCERY&q=dabur+coconut+oil&store=search.flipkart.com&spotlightTagId=BestvalueId_search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=bfc95a0e-859e-4489-b214-5a502cde35ab.HOLEZGN3CDNNAPJC.SEARCH&ppt=sp&ppn=sp&ssid=gykz0tchkw0000001622726055069&qH=b61c018726fba247",
    },

    {
      name: "Dabur Badam oil",
      price: 332,
      id: "details3",
      img1: "images/indi-products/hairoil/daburbadam1.jpeg",
      img2: "images/indi-products/hairoil/daburbadam2.jpg",
      carddetailsrc: "#details3",
      buysrc:
        "https://www.amazon.in/Dabur-Badam-Tail-100-Almond/dp/B009SOS7ZE/ref=pd_sbs_3/258-8384343-7083424?pd_rd_w=S3pko&pf_rd_p=18688541-e961-44b9-b86a-bd9b8fa83027&pf_rd_r=8D3SEAX2HP2NPNSWZKC3&pd_rd_r=156d148f-9902-4ea6-bfe0-1055d3381d55&pd_rd_wg=H6jSN&pd_rd_i=B08291FBHZ&psc=1",
    },
    {
      name: "Patanjali",
      price: 150,
      id: "details4",
      img1: "images/indi-products/hairoil/patanjali1.png",
      img2: "images/indi-products/hairoil/patanjali2.jpg",
      carddetailsrc: "#details4",
      buysrc:
        "https://www.patanjaliayurved.net/product/natural-personal-care/hair-care/patanjali-coconut-oil/1322",
    },
    {
      name: "Baidyanath",
      price: 563,
      id: "details5",
      img1: "images/indi-products/hairoil/baidyanath1.jpg",
      img2: "images/indi-products/hairoil/baidyanath2.jpg",
      carddetailsrc: "#details5",
      buysrc: "https://www.baidyanath.co/product/head-to-toe-health-kit/",
    },
    // {
    //   name: "Pure & sure",
    //   price: 222,
    //   id: "details6",
    //   img1: "images/indi-products/hairoil/pure1.jpg",
    //   img2: "images/indi-products/hairoil/pure2.jpg",
    //   carddetailsrc: "#details6",
    //   buysrc: "https://www.amazon.in/Pure-Sure-Castor-Oil-500ml/dp/B0786YJFZ9",
    // },
  ];
  var arobja = [a1, a2, a3, a4, a5];
  var arobjb = [b1, b2, b3, b4, b5];
  var n = 0;
  var m = 0;
  return (
    <container>
      <div className="row mx-auto">
        <h1 className="mainHead mb-3">Best Hairoil</h1>
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
                      <td>emulsifier</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Added palm oil</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Hydrogenated Oil</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Refined</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Harmful Fragrance</td>
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
