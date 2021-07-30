import React from "react";
import { NavLink } from "react-router-dom";
import "./css/A2ghee.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Table, Tab, Tabs } from "react-bootstrap";
import a1 from "./images/indi-products/paste/vicco1.jpg";
import b1 from "./images/indi-products/paste/vicco2.jpg";
import a2 from "./images/indi-products/paste/bentodent1.jpeg";
import b2 from "./images/indi-products/paste/bentodent2.jpg";
import a3 from "./images/indi-products/paste/biomed1.jpg";
import b3 from "./images/indi-products/paste/biomed2.jpg";
import a4 from "./images/indi-products/paste/biotique1.jpg";
import b4 from "./images/indi-products/paste/biotique2.png";
import a5 from "./images/indi-products/paste/dabur1.jpg";
import b5 from "./images/indi-products/paste/dabur2.jpg";
import a6 from "./images/indi-products/paste/patanjali1.jpg";
import b6 from "./images/indi-products/paste/patanjali2.jpg";
const A2ghee = () => {
  const arr = [
    {
      name: "Vicco",
      price: 149,
      id: "details1",
      img1: "images/indi-products/paste/vicco1.jpg",
      img2: "images/indi-products/paste/vicco2.jpg",
      carddetailsrc: "#details1",
      buysrc:
        "https://www.flipkart.com/vicco-vajradanti-paste-dalchini-flavour-150g-15-grm-x-10-toothpaste/p/itmc63c251a248ce?pid=TPSFZT8BUU2689KC&lid=LSTTPSFZT8BUU2689KCVPHBCZ&marketplace=FLIPKART&store=g9b%2Fcey%2F7ym&srno=b_1_2&otracker=browse&fm=organic&iid=d059b5d2-e410-4c82-8f45-597097a06e50.TPSFZT8BUU2689KC.SEARCH&ppt=browse&ppn=browse&ssid=qan5fmdvr40000001622723758566",
    },
    {
      name: "Bentodent",
      price: 93,
      id: "details2",
      img1: "images/indi-products/paste/bentodent1.jpeg",
      img2: "images/indi-products/paste/bentodent2.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.flipkart.com/bentodent-cardamom-natural-toothpaste/p/itmd010a4c3aa23e",
    },

    {
      name: "Biomed",
      price: 150,
      id: "details3",
      img1: "images/indi-products/paste/biomed1.jpg",
      img2: "images/indi-products/paste/biomed2.jpg",
      carddetailsrc: "#details3",
      buysrc:
        "https://www.flipkart.com/biomed-superwhite-natural-toothpaste/p/itmfcfvugznjrgm7",
    },
    {
      name: "Biotique",
      price: 112,
      id: "details4",
      img1: "images/indi-products/paste/biotique1.jpg",
      img2: "images/indi-products/paste/biotique2.png",
      carddetailsrc: "#details4",
      buysrc:
        "https://www.flipkart.com/biotique-bio-fruit-whitening-depigmentation/p/itmfb3b8fgtt6bfb?pid=FCPFB3B8E4F2UABF&lid=LSTFCPFB3B8E4F2UABFQZXVVR&marketplace=FLIPKART&q=biotique+paste&store=g9b&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=dcf13fdf-33d1-49e0-ac0f-624df5fe1d7f.FCPFB3B8E4F2UABF.SEARCH&ppt=sp&ppn=sp&ssid=vyavaelqg00000001622724325593&qH=0feda4ab6a433305",
    },
    {
      name: "Dabur",
      price: 120,
      id: "details5",
      img1: "images/indi-products/paste/dabur1.jpg",
      img2: "images/indi-products/paste/dabur2.jpg",
      carddetailsrc: "#details5",
      buysrc:
        "https://www.flipkart.com/dabur-lal-dant-manjan/p/itmetyd5bqnqhy3h?pid=TPSETYD5GHHEZQJZ&lid=LSTTPSETYD5GHHEZQJZTM17YR&marketplace=GROCERY&q=dabur+tooth+powder&store=g9b%2Fcey%2F7ym&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=0e5f9add-36a4-4bd6-a6b0-7f4f4e6acc28.TPSETYD5GHHEZQJZ.SEARCH&ppt=sp&ppn=sp&ssid=0eijnn02lc0000001622724385495&qH=3507c2d4b644e6d2",
    },
    {
      name: "Patanjali",
      price: 65,
      id: "details6",
      img1: "images/indi-products/paste/patanjali1.jpg",
      img2: "images/indi-products/paste/patanjali2.jpg",
      carddetailsrc: "#details6",
      buysrc:
        "https://www.patanjaliayurved.net/product/natural-personal-care/dental-care/tooth-powder-manjan/divya-dant-manjan/37",
    },
  ];

  var arobja = [a1, a2, a3, a4, a5, a6];
  var arobjb = [b1, b2, b3, b4, b5, b6];
  var n = 0;
  var m = 0;
  return (
    <container>
      <div className="row mx-auto">
        <h1 className="mainHead mb-3">Best Tooth Paste</h1>
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
