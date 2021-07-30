import React from "react";
import { NavLink } from "react-router-dom";
import "./css/A2ghee.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Table, Tab, Tabs } from "react-bootstrap";

const A2ghee = () => {
  const arr = [
    {
      name: "Patanjali",
      price: 32,
      id: "details1",
      img1: "images/indi-products/soap/patanjali1.jpg",
      img2: "images/indi-products/soap/patanjali2.jpg",
      carddetailsrc: "#details1",
      buysrc:
        "https://www.amazon.in/Patanjali-Ojas-Multani-Mitti-Cleanser/dp/B0056B1Y8K",
    },
    {
      name: "Kaprica",
      price: 75,
      id: "details2",
      img1: "images/indi-products/soap/kaprica1.jpg",
      img2: "images/indi-products/soap/kaprica2.jpg",
      carddetailsrc: "#details2",
      buysrc:
        "https://www.amazon.in/-/hi/Kaprica-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%83%E0%A4%A4%E0%A4%BF%E0%A4%95-%E0%A4%B9%E0%A5%88%E0%A4%82%E0%A4%A1%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AB%E0%A4%BC%E0%A5%8D%E0%A4%9F%E0%A5%87%E0%A4%A1-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%A1-%E0%A4%95%E0%A5%8B%E0%A4%95%E0%A5%8B%E0%A4%A8%E0%A4%9F/dp/B07PNBNDD1",
    },
    {
      name: "Cedar",
      price: 180,
      id: "details3",
      img1: "images/indi-products/soap/cedar1.jpg",
      img2: "images/indi-products/soap/cedar2.jpg",
      carddetailsrc: "#details3",
      buysrc:
        "https://www.amazon.in/-/hi/%E0%A4%95%E0%A5%8B%E0%A4%A8%E0%A5%87%E0%A4%B8-%E0%A4%B0%E0%A5%8B%E0%A4%9C%E0%A4%BC-%E0%A4%94%E0%A4%B0-%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%95-%E0%A4%B8%E0%A5%8B%E0%A4%AA/dp/B0744J3WFT/ref=pd_sbs_1/258-8384343-7083424?pd_rd_w=ay2SB&pf_rd_p=18688541-e961-44b9-b86a-bd9b8fa83027&pf_rd_r=5AXSXJKCPX5NQ9NHEPJH&pd_rd_r=e8299afd-384b-4d60-b53e-9d37b0216e28&pd_rd_wg=wq7Qz&pd_rd_i=B0744J3WFT&psc=1",
    },
    {
      name: "Neev",
      price: 130,
      id: "details4",
      img1: "images/indi-products/soap/neev1.jpg",
      img2: "images/indi-products/soap/neev2.jpg",
      carddetailsrc: "#details4",
      buysrc:
        "https://www.flipkart.com/neev-charcoal-soap-deep-pore-cleansing-flawless-skin-100-gms/p/itmf9269ddb2eaeb",
    },
    {
      name: "Ancient living",
      price: 220,
      id: "details5",
      img1: "images/indi-products/soap/ancientliving1.jpg",
      img2: "images/indi-products/soap/ancientliving2.jpeg",
      carddetailsrc: "#details5",
      buysrc:
        "https://www.flipkart.com/quaker-oats/p/itmf3qzpykhzhyr2?gclid=Cj0KCQjw2NyFBhDoARIsAMtHtZ6DMs1l7u8zg1xgvMQRZziWIaBryUP2Egib77AXGkRIFkJ4m8F9vWIaAjYoEALw_wcB&pid=CAFEUD56GKJXXSNC&lid=LSTCAFEUD56GKJXXSNCVLM9PI&marketplace=GROCERY&cmpid=content_cereal-flake_1377628020_g_8965229628_gmc_pla&tgi=sem,1,G,11214002,g,search,,386809304761,,,,c,,,,,,,&ef_id=Cj0KCQjw2NyFBhDoARIsAMtHtZ6DMs1l7u8zg1xgvMQRZziWIaBryUP2Egib77AXGkRIFkJ4m8F9vWIaAjYoEALw_wcB:G:s&s_kwcid=AL!739!3!386809304761!!!g!740041772137!&gclsrc=aw.ds",
    },
  ];
  return (
    <container>
      <div className="row mx-auto">
        <h1 className="mainHead mb-3">Best Soap</h1>
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
                      <td>Added palm oil</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Hydrogenated Oil</td>
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
