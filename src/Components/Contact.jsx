import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/style.css";
import Email from "../assets/icons/email.svg";
import EmailWhite from "../assets/icons/email_white.svg";
import ContactImg160 from "../assets/images/profile-pic-02_160.jpg";
import ContactImg320 from "../assets/images/profile-pic-02_320.jpg";
import ContactImg640 from "../assets/images/profile-pic-02_640.jpg";
import ContactImg960 from "../assets/images/profile-pic-02_960.jpg";

function ContactImage() {
  return (
    <img
      srcSet={`${ContactImg160} 160w, ${ContactImg320} 320w, ${ContactImg640} 640w, ${ContactImg960} 960w`}
      alt="Contact Picture"
      className="contact-img"
    />
  );
}

function Contact() {
  return (
    <>
      <div>
        <div className="contact-details">
          <h2 className="span">Contact Me</h2>
          <p className="span">
            Open for new job opportunities. Feel free to get in touch.
          </p>
          <a href="mailto:konzok.tobias@gmail.com">
            <img
              src={EmailWhite}
              alt="Email icon"
              width="32px"
              className="email"
            />
          </a>
          <p>konzok.tobias@gmail.com</p>
        </div>
        <div className="contact-img-container">
          <ContactImage />
        </div>
      </div>
    </>
  );
}

export default Contact;
