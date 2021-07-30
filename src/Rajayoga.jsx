import React from "react";
import { NavLink } from "react-router-dom";
import "./Chapter.css";
import a1 from "./images/hatayoga.jpg";
const Rajayoga = () => {
  return (
    <div className="holder">
      <NavLink exact to="/Video" activeClassName="video_link">
        <div className="shadow">
          <img src={a1} alt="image" loading="lazy" />
          <h3>
            <i className="fas fa-play-circle"></i>video 1 hatayoga introduction
            and the head stand
          </h3>
        </div>
      </NavLink>
      <NavLink exact to="/Video" activeClassName="video_link">
        <div className="shadow">
          <img src={a1} alt="image" loading="lazy" />
          <h3>
            <i className="fas fa-play-circle"></i>video 1 hatayoga introduction
            and the head stand
          </h3>
        </div>
      </NavLink>
      <NavLink exact to="/Video" activeClassName="video_link">
        <div className="shadow">
          <img src={a1} alt="image" loading="lazy" />
          <h3>
            <i className="fas fa-play-circle"></i>video 1 hatayoga introduction
            and the head stand
          </h3>
        </div>
      </NavLink>
      <NavLink exact to="/Video" activeClassName="video_link">
        <div className="shadow">
          <img src={a1} alt="image" loading="lazy" />
          <h3>
            <i className="fas fa-play-circle"></i>video 1 hatayoga introduction
            and the head stand
          </h3>
        </div>
      </NavLink>
      <NavLink exact to="/Video" activeClassName="video_link">
        <div className="shadow">
          <img src={a1} alt="image" loading="lazy" />
          <h3>
            <i className="fas fa-play-circle"></i>video 1 hatayoga introduction
            and the head stand
          </h3>
        </div>
      </NavLink>
      <NavLink exact to="/Video" activeClassName="video_link">
        <div className="shadow">
          <img src={a1} alt="image" loading="lazy" />
          <h3>
            <i className="fas fa-play-circle"></i>video 1 hatayoga introduction
            and the head stand
          </h3>
        </div>
      </NavLink>
      <NavLink exact to="/Video" activeClassName="video_link">
        <div className="shadow">
          <img src={a1} alt="image" loading="lazy" />
          <h3>
            <i className="fas fa-play-circle"></i>video 1 hatayoga introduction
            and the head stand
          </h3>
        </div>
      </NavLink>
    </div>
  );
};
export default Rajayoga;
