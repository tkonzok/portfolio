import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/style.css";
import ProfileImg160 from "../assets/images/profile-pic-01_160.jpg";
import ProfileImg320 from "../assets/images/profile-pic-01_320.jpg";
import ProfileImg640 from "../assets/images/profile-pic-01_640.jpg";
import ProfileImg960 from "../assets/images/profile-pic-01_960.jpg";
import JsLogo from "../assets/icons/javascript.svg";
import ReactLogo from "../assets/icons/react.svg";
import PythonLogo from "../assets/icons/python.svg";

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
      className={inView ? "profile-img fade-in-90" : "profile-img"}
    />
  );
}

function Name() {
  return (
    <div className="names">
      <p className="name fade-in delay1">TOBIAS</p>
      <p className="name fade-in delay2">KONZOK</p>
    </div>
  );
}

function Infos() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="infos" ref={ref}>
      <p className={inView ? "info fade-in delay4" : "info"}>Developer</p>
      <p className={inView ? "info fade-in delay5" : "info"}>Engineer</p>
      <p className={inView ? "info fade-in delay6" : "info"}>Musician</p>
      <div className={inView ? "info logos fade-in delay7" : "info logos"}>
        <img src={ReactLogo} alt="React Logo"></img>
        <img src={JsLogo} alt="JavaScript Logo"></img>
        <img src={PythonLogo} alt="Python Logo"></img>
      </div>
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
        <div className="name-container">
          <Name />
        </div>
        <div className="info-container">
          <Infos />
        </div>
      </div>
    </>
  );
}

export default Hero;
