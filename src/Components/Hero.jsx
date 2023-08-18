import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/style.css";
import ProfileImg160 from "../assets/images/profile-pic-01_160.jpg";
import ProfileImg320 from "../assets/images/profile-pic-01_320.jpg";
import ProfileImg640 from "../assets/images/profile-pic-01_640.jpg";
import ProfileImg960 from "../assets/images/profile-pic-01_960.jpg";

function ProfileImage() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <img
      ref={ref}
      srcSet={`${ProfileImg160} 160w, ${ProfileImg320} 320w, ${ProfileImg640} 640w, ${ProfileImg960} 960w`}
      alt="Profile Picture"
      className={inView ? "profile-img fade-in" : "profile-img"}
    />
  );
}

function Infos() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="infos" ref={ref}>
      <p className={inView ? "info fade-in delay2" : "info"}>Innovative</p>
      <p className={inView ? "info fade-in delay4" : "info"}>Motivated</p>
      <p className={inView ? "info fade-in delay6" : "info"}>Reliable</p>
    </div>
  );
}

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="profile-img-container">
          <ProfileImage />
        </div>
        <div className="info-container">
          <Infos />
        </div>
      </div>
    </>
  );
}

export default Hero;
