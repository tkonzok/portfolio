import "../styles/style.css";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useInView } from "react-intersection-observer";
import Links from "./Links.jsx";
import ArrowUp from "../assets/icons/arrow-up-bold-circle.svg";
import CloseWhite from "../assets/icons/close-white.svg";

function WorkExperience() {
  const [article, setArticle] = useState(0);

  function handleNextClick() {
    if (article < 3) {
      setArticle(article + 1);
    } else {
      setArticle(0);
    }
  }

  function handlePrevClick() {
    if (article === 0) {
      setArticle(3);
    } else {
      setArticle(article - 1);
    }
  }

  const swipeConfig = {
    delta: 10,
    preventDefaultTouchMove: false,
    trackTouch: true,
    trackMouse: true,
    rotationAngle: 0,
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNextClick(),
    onSwipedRight: () => handlePrevClick(),
    ...swipeConfig,
  });

  return (
    <div {...swipeHandlers}>
      <div className="prev-next-buttons">
        <button onClick={handlePrevClick} className="prev-example">
          Prev <img src={ArrowUp} alt="Arrow" className="turn-left-90" />
        </button>
        <button onClick={handleNextClick} className="next-example">
          <img src={ArrowUp} alt="Arrow" className="turn-right-90" /> Next
        </button>
      </div>

      <div className="work-experience-carousel">
        <div
          className={
            article === 0 ? "example-card visible" : "example-card invisible"
          }
        >
          <img
            src="https://eventelevator.de/wp-content/uploads/2019/05/ASC-AIDAnova-7-1024x576.jpg"
            alt="Picture of Project"
          />
          <p className="credits">Photo by EventElevator</p>
          <p className="example-name">AIDAnova - Theatrium</p>
        </div>
        <p
          className={
            article === 0
              ? "example-description visible"
              : "example-description invisible"
          }
        >
          <p>
            Theatrium is the main venue on the cruise ship AIDAnova, serving as
            a huge living room and place to hang out during daytime and an
            entertainment venue hosting the main shows in the night. It was my
            first time being responsible as system lead video for engineering
            the numerous LED screens in the venue, which was just one of more
            than 20 venues on the ship we installed video systems in.
          </p>
          <p>
            Besides selecting the best matching product on the market regarding
            available sizes, possible customizations, reliability, quality and
            price the main challenges were integrating all the surfaces into the
            ship's design, planning a proper cable infrastructure for fixed as
            well as moving parts and dimension the necessary amount of playout
            servers to maximize the performance.
          </p>
          <p>
            {" "}
            The whole project took from 2016 to 2018, ending with a four months
            installation and commissioning span on site to finally hand over the
            system to the customer. A few years later the sister ship AIDAcosma
            has been supplied with the same system.{" "}
          </p>
          <button>
            <a href="https://eventelevator.de/allgemein/medientechnik-von-amptown-system-company-im-theatrium-der-aidanova/">
              Read more about our job on AIDAnova
            </a>
          </button>
        </p>
        <div
          className={
            article === 1 ? "example-card visible" : "example-card invisible"
          }
        >
          <img
            src="https://eventelevator.de/wp-content/uploads/2019/07/ASC-Time-Machine-Restaurant-1-1024x576.jpg"
            alt="Picture of Project"
          />
          <p className="credits">Photo by EventElevator</p>
          <p className="example-name">AIDAnova - Time Machine Restaurant</p>
        </div>
        <p
          className={
            article === 1
              ? "example-description visible"
              : "example-description invisible"
          }
        >
          {" "}
          <p>
            The Dinner Entertainment Restaurant 'Time Machine' was another huge
            project we realized on AIDAnova and AIDAcosma. Guests can enjoy
            dinner and an interactive show simultaneously.
          </p>
          <p>
            More than 100 UHD displays had to be integrated and served with
            synchronous video content to create the illusion of sitting in an
            underwater boat, travelling through the sea to a secret place.
            Supported by many visual effects.
          </p>
          <p>
            Installation of displays overhead were one of the main challenges to
            solve. In general the limitted space, low ceiling height and large
            amount of technology to be installed forced us to adapt engineering
            many times.
          </p>
          <button>
            <a href="https://eventelevator.de/allgemein/asc-stattet-das-time-machine-restaurant-auf-der-aidanova-aus/">
              Read more about Time Machine
            </a>
          </button>
          <button>
            <a href="https://www.youtube.com/watch?v=GSxFcM_-K_Q">
              Rather watch a video?
            </a>
          </button>
        </p>
        <div
          className={
            article === 2 ? "example-card visible" : "example-card invisible"
          }
        >
          <img
            src="https://cruisetricks.de/bilder/albums/Costa-Toscana/Entertainment/costa-toscana-entertainment-atrium-colosseo-20220614_142802.jpg"
            alt="Picture of Project"
          />
          <p className="credits">Photo by cruisetricks.de</p>
          <p className="example-name">Costa Smeralda - Colosseo</p>
        </div>
        <p
          className={
            article === 2
              ? "example-description visible"
              : "example-description invisible"
          }
        >
          <p>
            Another cruise ship series we equipped with entertainment technology
            started with Costa Smeralda in 2017. Responsible for about 30
            venues, the Colosseo was surely the most challenging one.
          </p>
          <p>
            Similar to AIDAnova, Costa demanded a lot of LED screens to be
            integrated. The main challenge was a LED dome spanning the whole
            venue, consisting of more than 2000 single LED tiles out of three
            different product types, combined together to create the illusion of
            looking into the sky, watching the clouds passing by.
          </p>
          <p>
            As the single tiles had to be installed one by one in more than 10
            meters height, organizing everything down to the smallest in advance
            was indispensable. As well as simultaneous commisioning and testing
            during installation. This project was a lot of work with many
            different people from different disciplines involved and the result
            was absolutely impressive.
          </p>
        </p>
        <div
          className={
            article === 3 ? "example-card visible" : "example-card invisible"
          }
        >
          <img
            src="https://www.royalcaribbeanblog.com/sites/default/files/blog-images/Moment_Factory_Royal_Caribbean_Vistarama-3.jpg?itok=EtMfPQgL"
            alt="Picture of Project"
          />
          <p className="credits">Photo by Moment Factory</p>
          <p className="example-name">Royal Caribbean Quantum class - Two70</p>
        </div>
        <p
          className={
            article === 3
              ? "example-description visible"
              : "example-description invisible"
          }
        >
          <p>
            On all five ships of Royal Caribbean Quantum class we installed the
            so called Vistarama projection in the venue Two70. Sun shades can be
            lowered and be projected on with 18 4K laser projectors, forming one
            large screen along the whole width of the ship.
          </p>
          <p>
            Another very impressive installations I've participated in. I was
            not responsible for the engineering this time but for the
            commissioning of the system on three of five ships. Aligning all
            projections together and map their output around the frames of the
            sunshades demanded many night shifts of fine tuning.
          </p>
          <p>
            Also very special are the six robot LED screens moving in front of
            the Vistarama and forming either individual screens or one large
            one. We supplied them with the LED tiles and were also responsible
            for that the video playout is always matching the current position
            and orientation of the screens. We spent a lot of time together with
            the robots supplier to synchronize movement and images.
          </p>
          <button>
            <a href="https://royalcaribbeanblog.com/2016/08/21/everything-about-two70-royal-caribbeans-anthem-of-the-seas">
              Read More about Two70
            </a>
          </button>
          <button>
            <a href="https://www.youtube.com/watch?v=Ns2QJk2--Rk">
              Watch Two70 in action
            </a>
          </button>
        </p>
      </div>
    </div>
  );
}

function About() {
  const [showMore, setShowMore] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

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
          {showMore && (<>
            <p>
              Already equipped with my IT background and solid coding skills in
              Python I worked through{" "}
              <a href="https://theodinproject.com/about">
                <u>The Odin Project</u>
              </a>{" "}
              in 3 months full-time, enabling me to build frontend as well as
              fullstack applications with{" "}
              <b>JavaScript, React, Node.js, Express.js and MongoDB</b>.
              Together with a huge Discord community in the back it not only
              teaches how to code but how to organize the code, how to version
              control, how to test, simply how to transition to a professional
              step by step.
            </p>
              <p>
            By the end of 2023, I stepped into my first professional role as a Software Developer. Since then, I've taken every opportunity to expand my skill set, get into TypeScript with Angular and NestJS to tackle my daily tasks with efficiently. The decision to pivot my career path has proven to be remarkably right, as I've seamlessly integrated into the world of software development.
              </p></>
          )}
          <button className="show-more" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Show more..."}
          </button>
        </div>
        <div>
          <h2>Business Experience</h2>
          <ul ref={ref1}>
            <li className={inView1 ? "inView" : ""}>
              Software Development
            </li>
            <li className={inView1 ? "inView" : ""}>
              Technical Presales Consulting
            </li>
            <li className={inView1 ? "inView" : ""}>
              Detailed System Engineering
            </li>
            <li className={inView1 ? "inView" : ""}>
              Commissioning and Handover
            </li>
          </ul>
          <button
              className="show-experience"
              onClick={() => setShowExperience(true)}
          >
            More about my work experience
          </button>
        </div>
        <div>
          <h2>In-Depth Knowledge</h2>
          <ul ref={ref2}>
            <li className={inView2 ? "inView" : ""}>
              TypeScript, Angular, React, Python & Node.js
            </li>
            <li className={inView2 ? "inView" : ""}>AV/Media Technology</li>
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
            relationships, I took my next professional steps in
            IT industry with a lot of motivation, always confident I'll be able to profitably contribute any
            team.
          </p>
          <Links effect="slide-in" />
        </div>
      </div>
      <div
        className={
          showExperience
            ? "work-experience-container visible"
            : "work-experience-container"
        }
      >
        <div className="work-experience">
          <h3>Work Experience</h3>
          <p>
            These are projects in which I was technically responsible for the
            video system:
          </p>
          <WorkExperience />
          <button
            className="close-modal"
            onClick={() => setShowExperience(false)}
          >
            Return to main page
          </button>
          <button
            className="close-cross"
            onClick={() => setShowExperience(false)}
          >
            <img src={CloseWhite} alt="Cross" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
