import React from "react";
import { NavLink } from "react-router-dom";
import "./css/A2ghee.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Table, Tab, Tabs } from "react-bootstrap";
import a1 from "./images/indi-products/facemoisturiser/kamdhenu1.jpg";
import b1 from "./images/indi-products/facemoisturiser/kamdhenu2.jpg";
import a2 from "./images/indi-products/facemoisturiser/neev1.jpg";
import b2 from "./images/indi-products/facemoisturiser/neev1.jpg";
import a3 from "./images/indi-products/facemoisturiser/balagitambe1.jpg";
import b3 from "./images/indi-products/facemoisturiser/balagitambe1.jpg";
import a4 from "./images/indi-products/facemoisturiser/greenworth1.jpg";
import b4 from "./images/indi-products/facemoisturiser/greenworth2.jpg";
const A2ghee = () => {
  const arr = [
    {
      name: "Kamdhenu Laboratories",
      price: 296,
      id: "details1",
      img1: "images/indi-products/facemoisturiser/kamdhenu1.jpg",
      img2: "images/indi-products/facemoisturiser/kamdhenu2.jpg",
      carddetailsrc: "#details1",
      buysrc:
        "https://www.amazon.in/gp/product/B073JDX673/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=fittub-21&creative=24630&linkCode=as2&creativeASIN=B073JDX673&linkId=702835d329e3dc44681544faecf010f1",
    },
    {
      name: "Neev",
      price: 300,
      id: "details2",
      img1: "images/indi-products/facemoisturiser/neev1.jpg",
      img2: "images/indi-products/facemoisturiser/neev1.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.amazon.in/gp/product/B07H5L4FTF/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=fittub-21&creative=24630&linkCode=as2&creativeASIN=B07H5L4FTF&linkId=d330e8dea521d56a6f8e64549ab1b101",
    },
    {
      name: "Radha face oil",
      price: 230,
      id: "details3",
      img1: "images/indi-products/facemoisturiser/balagitambe1.jpg",
      img2: "images/indi-products/facemoisturiser/balagitambe1.jpg",
      carddetailsrc: "#details3",
      buysrc: "https://www.ishalife.com/in/purely-natural-face-cleanser",
    },
    {
      name: "Green Worth",
      price: 188,
      id: "details4",
      img1: "images/indi-products/facemoisturiser/greenworth1.jpg",
      img2: "images/indi-products/facemoisturiser/greenworth2.jpg",
      carddetailsrc: "#details4",
      buysrc:
        "https://www.flipkart.com/etheric-natural-face-body-wash-powder/p/itm2f6625845559f?pid=FCTECFHWGPWYV3G7&lid=LSTFCTECFHWGPWYV3G7LKOZ8G&marketplace=FLIPKART&cmpid=content_body-skin-treatment_8619800596_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,406573416151,,,,c,,,,,,,&ef_id=Cj0KCQjwweyFBhDvARIsAA67M73Qlcu419AvcuzAJysEHmSCUGZ6OQbaWD96Sdj33UsZ746psT8HBTsaAqe8EALw_wcB:G:s&s_kwcid=AL!739!3!406573416151!!!u!815867792622!&gclid=Cj0KCQjwweyFBhDvARIsAA67M73Qlcu419AvcuzAJysEHmSCUGZ6OQbaWD96Sdj33UsZ746psT8HBTsaAqe8EALw_wcB&gclsrc=aw.ds",
    },
  ];
  var arobja = [a1, a2, a3, a4];
  var arobjb = [b1, b2, b3, b4];
  var n = 0;
  var m = 0;
  return (
    <container>
      <div className="row mx-auto">
        <h1 className="mainHead mb-3">Best Facemoisturiser</h1>
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
                      <td>Mineral Oil</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Harmful Fragrance</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Sulphide</td>
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
