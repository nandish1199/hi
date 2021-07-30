import React from "react";
import {NavLink} from "react-router-dom"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import "./Chapter.css"


const Nutrition =()=>{

    return(
        <container className="container">
        <NavLink exact to="/Chapter1" activeClassName="video_link">
        <div className="shadow">
            <img src="images/hatayoga.jpg" alt="image" loading="lazy"/>
            <h3><i className="fas fa-play-circle"></i>video 1 hatayoga introduction and the head stand</h3>
        </div>
        </NavLink>
        <NavLink exact to="/Chapter1" activeClassName="video_link">
        <div className="shadow">
            <img src="images/hatayoga.jpg" alt="image" loading="lazy"/>
            <h3><i className="fas fa-play-circle"></i>video 1 hatayoga introduction and the head stand</h3>
        </div>
        </NavLink>
        <NavLink exact to="/Chapter1" activeClassName="video_link">
        <div className="shadow">
            <img src="images/hatayoga.jpg" alt="image" loading="lazy"/>
            <h3><i className="fas fa-play-circle"></i>video 1 hatayoga introduction and the head stand</h3>
        </div>
        </NavLink>
        <NavLink exact to="/Chapter1" activeClassName="video_link">
        <div className="shadow">
            <img src="images/hatayoga.jpg" alt="image" loading="lazy"/>
            <h3><i className="fas fa-play-circle"></i>video 1 hatayoga introduction and the head stand</h3>
        </div>
        </NavLink>
        <NavLink exact to="/Chapter1" activeClassName="video_link">
        <div className="shadow">
            <img src="images/hatayoga.jpg" alt="image" loading="lazy"/>
            <h3><i className="fas fa-play-circle"></i>video 1 hatayoga introduction and the head stand</h3>
        </div>
        </NavLink>
        <NavLink exact to="/Chapter1" activeClassName="video_link">
        <div className="shadow">
            <img src="images/hatayoga.jpg" alt="image" loading="lazy"/>
            <h3><i className="fas fa-play-circle"></i>video 1 hatayoga introduction and the head stand</h3>
        </div>
        </NavLink>
        <NavLink exact to="/Chapter1" activeClassName="video_link">
        <div className="shadow">
            <img src="images/hatayoga.jpg" alt="image" loading="lazy"/>
            <h3><i className="fas fa-play-circle"></i>video 1 hatayoga introduction and the head stand</h3>
        </div>
        </NavLink>
        
        </container>
    )
}
export default Nutrition;