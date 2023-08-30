import "../styles/style.css";
import Links from "./Links.jsx";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="about-me">
        <div>
          <h2>My Background</h2>
          <p>
            After graduating in B.Sc. Media Technology in 2016 and more than
            seven years working as a project engineer and system specialist for
            a system integrator, I decided resetting focus on software
            development in 2023 to seize the opportunity to do something
            self-made yet meaningful.
          </p>
          <p>
            Already equipped with my IT background and solid coding skills in
            Python I worked through{" "}
            <a href="https://theodinproject.com/about">
              <u>The Odin Project</u>
            </a>{" "}
            in 12 weeks full-time, enabling me to build frontend as well as
            fullstack applications with JavaScript, React, Node.js, Express.js
            and MongoDB. Together with a huge Discord community in the back it
            not only teaches how to code but how to organize the code, how to
            version control, how to test, simply how to be professional.
          </p>
        </div>
        <div>
          <h2>Business Experience</h2>
          <ul>
            <li>Technical Presales Consulting</li>
            <li>Detailed System Engineering</li>
            <li>Commissioning and Handover to End-Customers</li>
          </ul>
        </div>
        <div>
          <h2>In-Depth Knowledge</h2>
          <ul>
            <li>AV/Media Technology</li>
            <li>JavaScript, Python & Node.js</li>
          </ul>
        </div>
        <div>
          <h2>Special Interests</h2>
          <ul>
            <li>Machine learning algorithms</li>
            <li>Data Processing / Data Science</li>
            <li>Artificial Intelligence</li>
            <li>High Potential accelerating Energy Transition</li>
          </ul>
        </div>
        <div>
          <h2>Beside Work</h2>
          <ul>
            <li>Passionate Musician</li>
            <li>Football Fanatic</li>
            <li>Frequent Runner</li>
            <li>Travel Enthusiast</li>
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
