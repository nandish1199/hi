import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <ul className="cards">
        <li>
          <a href="#" className="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src="images/profile2.jpg" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Nandish</h3>
                  <span className="card__status">fitness Trainer</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src="images/profile2.jpg" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Nandish</h3>
                  <span className="card__status">HR Recruiter</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src="images/profile2.jpg" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Nandish</h3>
                  <span className="card__tagline">
                    Lorem ipsum dolor sit amet consectetur
                  </span>
                  <span className="card__status">Web Developer</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src="images/profile2.jpg" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Nandish</h3>
                  <span className="card__status">UI /UX Desiner</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default About;
