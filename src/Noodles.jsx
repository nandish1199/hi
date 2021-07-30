import React from "react";
import { NavLink } from "react-router-dom";
import "./css/A2ghee.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Table, Tab, Tabs } from "react-bootstrap";
import a1 from "./images/indi-products/noodles/milletlife1.jpg";
import b1 from "./images/indi-products/noodles/milletlife2.jpg";
import a2 from "./images/indi-products/noodles/nallabagam1.jpg";
import b2 from "./images/indi-products/noodles/nallabagam1.jpg";
import a3 from "./images/indi-products/noodles/naturalred1.jpg";
import b3 from "./images/indi-products/noodles/naturalred2.jpg";
import a4 from "./images/indi-products/noodles/somemore1.jpg";
import b4 from "./images/indi-products/kamdhenughee-ing.png";
import a5 from "./images/indi-products/noodles/tanhaji1.jpeg";
import b5 from "./images/indi-products/noodles/tanhaji2.jpeg";
const A2ghee = () => {
  const arr = [
    {
      name: "Millet Life",
      price: 66,
      id: "details2",
      img1: "images/indi-products/noodles/milletlife1.jpg",
      img2: "images/indi-products/noodles/milletlife2.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.amazon.in/Millet-Life-Noodles-Nutritious-Vegetarian/dp/B08D3VPJ19/ref=pd_day0_3/258-8384343-7083424?pd_rd_w=OHN79&pf_rd_p=ddf3065d-37bd-4713-89a2-28f76ee88912&pf_rd_r=XAQE8BDH0P34628H3CTV&pd_rd_r=f07f8b72-9820-4a14-89cf-f293dce35e6e&pd_rd_wg=ipZUA&pd_rd_i=B08D3VPJ19&psc=1",
    },
    {
      name: "Nallabagam",
      price: 65,
      id: "details2",
      img1: "images/indi-products/noodles/nallabagam1.jpg",
      img2: "images/indi-products/noodles/nallabagam1.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.amazon.in/Nalabagam-Multi-Millet-Noodles/dp/B075BD22P2",
    },
    {
      name: "Naturally Your's",
      price: 395,
      id: "details1",
      img1: "images/indi-products/noodles/naturalred1.jpg",
      img2: "images/indi-products/noodles/naturalred2.jpg",
      carddetailsrc: "#details1",
      buysrc:
        "https://www.flipkart.com/naturally-yours-red-rice-noodles-180g-pack-3-instant-vegetarian/p/itmc93987d5a5401",
    },
    {
      name: "Some More",
      price: 390,
      id: "details2",
      img1: "images/indi-products/noodles/somemore1.jpg",
      img2: "images/indi-products/noodles/somemore2.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.amazon.in/Some-More-Multi-Millet-Noodles/dp/B076J81C3V",
    },
    {
      name: "Tanhaji Naturals",
      price: 290,
      id: "details3",
      img1: "images/indi-products/noodles/tanhaji1.jpeg",
      img2: "images/indi-products/noodles/tanhaji2.jpeg",
      carddetailsrc: "#details3",
      buysrc:
        "https://www.flipkart.com/thanjai-natural-little-millets-noodles-180g-x-8-processed-ingredients-no-chemicals-preservatives-instant-vegetarian/p/itm1eb37e47c4c32?pid=NDLFYGG8VY5ENRKC&lid=LSTNDLFYGG8VY5ENRKCXN0U44&marketplace=FLIPKART&store=eat%2Fpqj&srno=b_10_361&otracker=browse&fm=organic&iid=c76a05e1-3697-4769-9522-2587913d134b.NDLFYGG8VY5ENRKC.SEARCH&ppt=browse&ppn=browse&ssid=2ut7hq4kkg0000001622634022899",
    },
  ];
  var arobja = [a1, a2, a3, a4, a5];
  var arobjb = [b1, b2, b3, b4, b5];
  var n = 0;
  var m = 0;
  return (
    <container>
      <div className="row mx-auto">
        <h1 className="mainHead mb-3">Best Noodles</h1>
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
