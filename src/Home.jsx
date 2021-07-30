import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Groccery from "./images/groccery.png";
import akayurveda from "./images/youtuber/akayurveda.png";
import clever from "./images/youtuber/clever.png";
import cookingshooking from "./images/youtuber/cookingshooking.jpg";
import naresh from "./images/youtuber/naresh.jpg";
import ojayurveda from "./images/youtuber/ojayurveda.jpg";
import onlinetutorials from "./images/youtuber/onlinetutorials.jpg";
import thapa from "./images/youtuber/thapa.jpg";
import trimurthy from "./images/youtuber/trimurthy.png";
import vigyan from "./images/youtuber/vigyan.jpg";
const Home = () => {
  return (
    <div className="maincont">
      <container>
        <card1 className="card shadow">
          <h1 className="card-h1">Best products</h1>
          <img src={Groccery} alt="image" />
          <p className="card-p">
            Click here to see the best natural products in the indian market
          </p>
          <NavLink exact to="/Products" activeClassName="">
            <button type="button" className="btn btn-info">
              Click here
            </button>
          </NavLink>
        </card1>
        <card2 className="card shadow">
          <h1 className="card-h1">Yoga</h1>
          <NavLink exact to="/Chapter1" activeClassName="">
            <button type="button" className="btn btn-info">
              Chapter1
            </button>
          </NavLink>
          <NavLink exact to="/Chapter2" activeClassName="">
            <button type="button" className="btn btn-info">
              Chapter2
            </button>
          </NavLink>
          <NavLink exact to="/Chapter3" activeClassName="">
            <button type="button" className="btn btn-info">
              Chapter3
            </button>
          </NavLink>
          <NavLink exact to="/Chapter4" activeClassName="">
            <button type="button" className="btn btn-info">
              Chapter4
            </button>
          </NavLink>
          <NavLink exact to="/Rajayoga" activeClassName="">
            <button type="button" className="btn btn-info">
              Rajayoga
            </button>
          </NavLink>
        </card2>
        <card3 className="card shadow">
          <h1 className="card-h1">Fitness</h1>
          <NavLink exact to="/Chapter1" activeClassName="">
            <button type="button" className="btn btn-info">
              Human Anatomy
            </button>
          </NavLink>
          <NavLink exact to="/Chapter2" activeClassName="">
            <button type="button" className="btn btn-info">
              Workout
            </button>
          </NavLink>
          <NavLink exact to="/Chapter3" activeClassName="">
            <button type="button" className="btn btn-info">
              Nutrition
            </button>
          </NavLink>
          <NavLink exact to="/Chapter4" activeClassName="">
            <button type="button" className="btn btn-info">
              Ayurveda
            </button>
          </NavLink>
        </card3>
      </container>
      <h1 className="heading2">Most Respected People/Youtubers</h1>
      <container2>
        {/* <NavLink exact to="/Chapter4" activeClassName=""><button type="button" className="btn btn-info">Click here to see all</button></NavLink> */}
        <div className="youtuber_card card shadow ">
          <img src={ojayurveda} alt="image" loading="lazy" />
          <h2 className="text-center">Oj ayurved</h2>
          <p className="name text-center">dr. Arun mishra</p>
          <p className="text-center">Best Ayurveda channel (Hindi)</p>
          <a
            className="text-center card shadow"
            href="https://www.youtube.com/c/OJAyurveda/videos"
            target="_blank"
          >
            Channel link
          </a>
        </div>
        <div className="youtuber_card card shadow ">
          <img src={thapa} alt="image" loading="lazy" />
          <h2 className="text-center">Thapa Technical</h2>
          <p className="name text-center">Vinod Thapa</p>
          <p className="text-center">Best Coding channel (Hindi)</p>
          <a
            className="text-center card shadow"
            href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
            target="_blank"
          >
            Channel link
          </a>
        </div>
        <div className="youtuber_card card shadow ">
          <img src={trimurthy} alt="image" loading="lazy" />
          <h2 className="text-center">Trimurthy Hunasekatte</h2>
          <p className="name text-center">Trimurthy Hunasekatte</p>
          <p className="text-center">Best Ayurveda channel (Kannada)</p>
          <a
            className="text-center card shadow"
            href="https://www.youtube.com/channel/UCKy0AKdcIWe4BUEPplpVDig"
            target="_blank"
          >
            Channel link
          </a>
        </div>
        <div className="youtuber_card card shadow ">
          <img src={vigyan} alt="image" loading="lazy" />
          <h2 className="text-center">Vigyan Tv India</h2>
          <p className="name text-center">Vigyan Tv India</p>
          <p className="text-center">
            Best Quantum,Particle Physics channel (Hindi)
          </p>
          <a
            className="text-center card shadow"
            href="https://www.youtube.com/c/VigyanTvIndia/videos"
            target="_blank"
          >
            Channel link
          </a>
        </div>
        <div className="youtuber_card card shadow ">
          <img src={onlinetutorials} alt="image" loading="lazy" />
          <h2 className="text-center">Online Tutorials</h2>
          <p className="name text-center">Muhammod Irshad</p>
          <p className="text-center">Best front end Coding Channel</p>
          <a
            className="text-center card shadow"
            href="https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog"
            target="_blank"
          >
            Channel link
          </a>
        </div>
        <div className="youtuber_card card shadow ">
          <img src={cookingshooking} alt="image" loading="lazy" />
          <h2 className="text-center">Cooking Shooking</h2>
          <p className="name text-center">Yaman Agrawal</p>
          <p className="text-center">Best Cooking Channel</p>
          <a
            className="text-center card shadow"
            href="https://www.youtube.com/c/CookingshookingIn/videos"
            target="_blank"
          >
            Channel link
          </a>
        </div>
        <div className="youtuber_card card shadow ">
          <img src={naresh} alt="image" loading="lazy" />
          <h2 className="text-center">Awaken With Naresh</h2>
          <p className="name text-center">Dr. Naresh</p>
          <p className="text-center">Best Yoga Knowledge Channel</p>
          <a
            className="text-center card shadow"
            href="https://www.youtube.com/user/Virasatmandir"
            target="_blank"
          >
            Channel link
          </a>
        </div>
        <div className="youtuber_card card shadow ">
          <img src={akayurveda} alt="image" loading="lazy" />
          <h2 className="text-center">AK Ayurveda</h2>
          <p className="name text-center">AK Ayurveda</p>
          <p className="text-center">Best Practical Ayurveda channel</p>
          <a
            className="text-center card shadow"
            href="https://www.youtube.com/channel/UCv2qV1Hq6VC2nADA7S4n4kA/playlists"
            target="_blank"
          >
            Channel link
          </a>
        </div>
        <div className="youtuber_card card shadow ">
          <img src={clever} alt="image" loading="lazy" />
          <h2 className="text-center">Clever Programmer</h2>
          <p className="name text-center">Quazi</p>
          <p className="text-center">Best Coding channel</p>
          <a
            className="text-center card shadow"
            href="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ"
            target="_blank"
          >
            Channel link
          </a>
        </div>
      </container2>
    </div>
  );
};
export default Home;
