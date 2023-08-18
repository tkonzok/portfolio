import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/style.css";
import Github from "../assets/icons/github.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Xing from "../assets/icons/xing.svg";
import GithubWhite from "../assets/icons/github_white.svg";
import LinkedinWhite from "../assets/icons/linkedin_white.svg";
import XingWhite from "../assets/icons/xing_white.svg";

function Links() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="links" ref={ref}>
      <a
        href="https://github.com/tkonzok"
        className={inView ? "link slide-in from-left delay1" : "link"}
      >
        <img src={GithubWhite} alt="GitHub icon" className="github" />
      </a>
      <a
        href="https://linkedin.com/in/tobias-konzok"
        className={inView ? "link slide-in from-left delay1-5" : "link"}
      >
        <img src={LinkedinWhite} alt="LinkedIN icon" className="linkedin" />
      </a>
      <a
        href="https://xing.com/profile/tobias_konzok"
        className={inView ? "link slide-in from-left delay2" : "link"}
      >
        <img src={XingWhite} alt="Xing icon" className="xing" />
      </a>
    </div>
  );
}

function About() {
  return (
    <>
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I am an experienced project engineer with in-depth knowledge in
          AV/media technology, complemented by good knowledge in web development
          with JavaScript and special interest in machine learning algorithms
          and data processing with Python.
        </p>
        <p>
          I bring extensive project business experience, from presales
          consulting, detailed system engineering to commissioning and handover
          to the customer. As a technically versed person, I am motivated to
          take my next professional step in IT industry and confident I'll be
          able to profitably contribute any team.
        </p>
        <p>
          This portfolio presents you an excerpt of my projects realized so far.
        </p>
        <Links />
      </div>
    </>
  );
}

export default About;
