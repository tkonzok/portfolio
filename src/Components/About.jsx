import "../styles/style.css";
import Links from "./Links.jsx";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="about-me">
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
        <Links effect="slide-in" />
      </div>
    </div>
  );
}

export default About;
