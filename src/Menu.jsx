import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const font = {
    fontSize: "17px",
  };
  return (
    <>
      {/* <NavLink exact  to="/Contact">contact</NavLink>
        <NavLink exact  to="/About">about</NavLink> */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
          width: "100vw",
          zIndex: "5",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>Nandish</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item p-2">
                <NavLink
                  activeClassName="nav_links"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "17px",
                  }}
                  exact
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  activeClassName="nav_links "
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "17px",
                  }}
                  exact
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  activeClassName="nav_links "
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "17px",
                  }}
                  exact
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menu;
