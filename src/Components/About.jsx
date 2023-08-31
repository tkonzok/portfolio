import "../styles/style.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Links from "./Links.jsx";

function About() {
  const [showMore, setShowMore] = useState(false);

  const [ref1, inView1] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [ref4, inView4] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div>
      <h1>About Me</h1>
      <div className="about-me">
        <div>
          <h2>My Background</h2>
          <p>
            After graduating in <b>B.Sc. Media Technology</b> in 2016 and more
            than seven years working as a{" "}
            <b>project engineer and system specialist</b> for a system
            integrator, I decided resetting focus on software development in
            2023 to seize the opportunity to do something self-made yet
            meaningful.
          </p>
          {showMore && (
            <p>
              Already equipped with my IT background and solid coding skills in
              Python I worked through{" "}
              <a href="https://theodinproject.com/about">
                <u>The Odin Project</u>
              </a>{" "}
              in 12 weeks full-time, enabling me to build frontend as well as
              fullstack applications with{" "}
              <b>JavaScript, React, Node.js, Express.js and MongoDB</b>.
              Together with a huge Discord community in the back it not only
              teaches how to code but how to organize the code, how to version
              control, how to test, simply how to be professional.
            </p>
          )}
          <button className="show-more" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Show more..."}
          </button>
        </div>
        <div>
          <h2>Business Experience</h2>
          <ul ref={ref1}>
            <li className={inView1 ? "inView" : ""}>
              Technical Presales Consulting
            </li>
            <li className={inView1 ? "inView" : ""}>
              Detailed System Engineering
            </li>
            <li className={inView1 ? "inView" : ""}>
              Commissioning and Handover to End-Customers
            </li>
          </ul>
        </div>
        <div>
          <h2>In-Depth Knowledge</h2>
          <ul ref={ref2}>
            <li className={inView2 ? "inView" : ""}>AV/Media Technology</li>
            <li className={inView2 ? "inView" : ""}>
              JavaScript, Python & Node.js
            </li>
          </ul>
        </div>
        <div>
          <h2>Special Interests</h2>
          <ul ref={ref3}>
            <li className={inView3 ? "inView" : ""}>
              Machine learning algorithms
            </li>
            <li className={inView3 ? "inView" : ""}>
              Data Processing / Data Science
            </li>
            <li className={inView3 ? "inView" : ""}>Artificial Intelligence</li>
            <li className={inView3 ? "inView" : ""}>
              High Potential accelerating Energy Transition
            </li>
          </ul>
        </div>
        <div>
          <h2>Beside Work</h2>
          <ul ref={ref4}>
            <li className={inView4 ? "inView" : ""}>Passionate Musician</li>
            <li className={inView4 ? "inView" : ""}>Football Fanatic</li>
            <li className={inView4 ? "inView" : ""}>Frequent Runner</li>
            <li className={inView4 ? "inView" : ""}>Travel Enthusiast</li>
          </ul>
        </div>
        <div>
          <p>
            As a technically versed person with strong understanding of logical
            relationships, I am motivated to take my next professional step in
            IT industry and confident I'll be able to profitably contribute any
            team.
          </p>
          <Links effect="slide-in" />
        </div>
      </div>
    </div>
  );
}

export default About;
