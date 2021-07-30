import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="bdy">
      <div className="contact-icons">
        <a href="#">
          <i id="icn1" className="fab fa-facebook"></i>
          <span>Facebook</span>
        </a>
        <a href="#">
          <i id="icn2" className="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
        <a href="#">
          <i id="icn3" className="fab fa-youtube"></i>
          <span>Youtube</span>
        </a>
        <a href="#">
          <i id="icn4" className="fab fa-twitter"></i>
          <span>Twitter</span>
        </a>
        <a href="#">
          <i id="icn4" className="fab fa-telegram"></i>
          <span>Telegram</span>
        </a>
        <a href="#">
          <i id="icn5" className="far fa-envelope"></i>
          <span>
            nandish1199 <br />
            @gmail.com
          </span>
        </a>
        <a href="tel:+91-6362693203">
          <i className="fas fa-phone"></i>
          <span>+91-6362693203</span>
        </a>
      </div>
    </div>
  );
};
export default Contact;
