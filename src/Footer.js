import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-icons1">
          <a id="ic1" href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a id="ic2" href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a id="ic3" href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a id="ic4" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a id="ic4" href="#">
            <i className="fab fa-telegram"></i>
          </a>
          <a id="ic4" href="#">
            <i className="fab fa-skype"></i>
          </a>
        </div>
        <div className="footer-icons2">
          <a id="ic5" href="#">
            <i className="far fa-envelope"></i> compitative@gmail.com
          </a>{" "}
          &nbsp;&nbsp;
          <a id="ic6" href="tel:+4733378901">
            <i className="fas fa-phone"></i>
            <span> Call Us : +4733378901</span>
          </a>{" "}
          &nbsp;&nbsp;
          <a id="ic7">
            <i className="fas fa-home"></i> Address: Karnataka Dharwad Saptapur
            2nd cross{" "}
          </a>
        </div>
      </div>
      <div className="credits">
        <a>Credits:Font Awesome, Victeezy, Pixabey</a>
      </div>
      <div className="footer-3">
        <a>
          2020 Copyright <i className="far fa-copyright"></i>school.com | Terms
          And Conditions
        </a>
      </div>
    </footer>
  );
};
export default Footer;
