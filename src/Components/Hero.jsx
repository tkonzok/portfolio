import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/style.css";
import ProfileImg160 from "../assets/images/profile-pic-01_160.jpg";
import ProfileImg320 from "../assets/images/profile-pic-01_320.jpg";
import ProfileImg640 from "../assets/images/profile-pic-01_640.jpg";
import ProfileImg960 from "../assets/images/profile-pic-01_960.jpg";
import ReactLogo from "../assets/icons/react.svg";
import PythonLogo from "../assets/icons/python.svg";
import TypeScriptLogo from "../assets/icons/typescript.svg";
import AngularLogo from "../assets/icons/angular-original.svg";
import NestLogo from "../assets/icons/nestjs.svg";

function ProfileImage() {
  const { ref, inView } = useInView({
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

function TechStack() {
  return (
      <div className="stack">
        <div className="logo slide-in from-right delay2">
          <img src={AngularLogo} alt="Angular Logo"></img>
        </div>
        <div className="logo slide-in from-right delay3">
          <img src={ReactLogo} alt="React Logo"></img>
        </div>
        <div className="logo slide-in from-right delay4">
          <img src={TypeScriptLogo} alt="TypeScript Logo"></img>
        </div>
        <div className="logo slide-in from-right delay5">
          <img src={NestLogo} alt="NestJs Logo"></img>
        </div>
        <div className="logo slide-in from-right delay6">
          <img src={PythonLogo} alt="Python Logo"></img>
        </div>
      </div>
  );
}

function Buzzwords() {
  const {ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [buzzword, setBuzzword] = useState(-1);

  async function startNewInterval(msec) {
    await new Promise((resolve) => setTimeout(resolve, msec));
    if (buzzword < 3) {
      setBuzzword(buzzword + 1);
    }
  }

  useEffect(() => {
    startNewInterval(4000);
  }, [buzzword, inView]);

  return (
    <div
      ref={ref}
      className={inView ? "buzzwords slide-in from-bottom delay4" : "buzzwords"}
    >
      <div
        className={buzzword === 0 ? "buzzword visible" : "buzzword invisible"}
      >
        <p>Developer</p>
      </div>
      <div
        className={buzzword === 1 ? "buzzword visible" : "buzzword invisible"}
      >
        <p>Engineer</p>
      </div>
      <div
        className={buzzword === 2 ? "buzzword visible" : "buzzword invisible"}
      >
        <p>Musician</p>
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
          <div className="buzzwords-container">
            <Buzzwords />
          </div>
        </div>
        <div className="techstack-container">
          <TechStack />
        </div>
      </div>
    </>
  );
}

export default Hero;
