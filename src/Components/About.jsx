import "../styles/style.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Links from "./Links.jsx";

function WorkExperience() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [article, setArticle] = useState(3);

  async function startNewInterval(msec) {
    await new Promise((resolve) => setTimeout(resolve, msec));
    if (article < 3) {
      setArticle(article + 1);
    } else {
      setArticle(0);
    }
  }

  useEffect(() => {
    startNewInterval(8000);
  }, [article, inView]);

  return (
    <div className="work-experience-carousel" ref={ref}>
      <div
        className={
          article === 0 ? "example-card visible" : "example-card invisible"
        }
      >
        <img
          src="https://eventelevator.de/wp-content/uploads/2019/05/ASC-AIDAnova-7-1024x576.jpg"
          alt="Picture of Project"
        />
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
          Theatrium is the main venue on the cruise ship AIDAnova, serving as a
          huge living room and place to hang out during daytime and an
          entertainment venue in the night. It was my first time being
          responsible as system lead video for engineering the numerous LED
          screens in the venue.
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
          system to the customer.{" "}
        </p>
        <a href="https://eventelevator.de/allgemein/medientechnik-von-amptown-system-company-im-theatrium-der-aidanova/">
          Read more about our job on AIDAnova (in German)
        </a>
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
        <p className="example-name">
          AIDAnova - Dinner Entertainment Restaurant
        </p>
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
          The Dinner Entertainment Restaurant was another huge project we
          relized from 2016 to 2018 on AIDAnova. Guests enjoy dinner and an
          interactive show in the same time.
        </p>
        <p>
          More than 100 UHD displays had to be integrated and served with
          synchronous video content to create the illusion of sitting in an
          underwater boat, travelling through the sea to a secret place. All
          that supported by visual and sound effects.
        </p>
        <p>
          Installation of displays overhead were one of the main challenges to
          overcome. In general the limitted space, low ceiling height and large
          amount of technology to be installed forced us to adapt engineering
          many times.
        </p>
        <a href="https://eventelevator.de/allgemein/asc-stattet-das-time-machine-restaurant-auf-der-aidanova-aus/">
          Read more about our job in the restaurant (in German)
        </a>
        <a href="https://www.youtube.com/watch?v=GSxFcM_-K_Q">
          Rather watch a video?
        </a>
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
          started with Costa Smeralda in 2017. Responsible for about 30 venues,
          the Colosseo was surely the most challenging one.
        </p>
        <p>
          Similar to AIDAnova the customer asked for a lot of LED screens to be
          integrated. The main challenge was a LED dome spanning the whole
          venue, sonsisting of more than 2000 single LED tiles out of three
          different product types, such combined together to create the illusion
          of looking into the sky, watching the clouds passing by.
        </p>
        <p>
          As the single tiles had to be installed one by one in more than 10
          meters height, organizing everything down to the smallest in advance
          was indispensable. As well as simultaneous commisioning and testing
          during installation.
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
          On all five ships of Royal Caribbean Quantum class we installed the so
          called Vistarama projection in the venue Two70. Sun shades can brought
          down and be projected on with 18 4K laser projectors, forming one
          large screen along the whole width of the ship.
        </p>
        <p>
          Surely one of the most impressing installations I've seen so far. I
          was not responsible for the engineering but for the commissioning of
          the system on three of five ships.
        </p>
        <p>
          Also very impressing are the six robot LED screens moving in front of
          the Vistarama and forming either individual screens or one large one.
          We supplied them with the LED tiles and were also responsible for
          video playout always matching the position and orientation of the
          screens. Robots and their movement was done by ABB who we spent a lot
          of time with to synchronize movement and images.
        </p>
        <a href="https://royalcaribbeanblog.com/2016/08/21/everything-about-two70-royal-caribbeans-anthem-of-the-seas">
          Read More about Two70
        </a>
        <a href="https://www.youtube.com/watch?v=Ns2QJk2--Rk">
          Rather watch a video?
        </a>
      </p>
    </div>
  );
}

function About() {
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
            <>
              <p>
                Already equipped with my IT background and solid coding skills
                in Python I worked through{" "}
                <a href="https://theodinproject.com/about">
                  <u>The Odin Project</u>
                </a>{" "}
                in 12 weeks full-time, enabling me to build frontend as well as
                fullstack applications with{" "}
                <b>JavaScript, React, Node.js, Express.js and MongoDB</b>.
                Together with a huge Discord community in the back it not only
                teaches how to code but how to organize the code, how to version
                control, how to test, simply how to transition to a professional
                step by step.
              </p>
              <button className="show-modal" onClick={() => setShowModal(true)}>
                Want to see some more?
              </button>
            </>
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
              Commissioning and Handover
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
            <li className={inView3 ? "inView" : ""}>Energy Transition</li>
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
      <div
        className={showModal ? "work-experience visible" : "work-experience"}
      >
        <h2>Working Experience</h2>
        <p>
          These are projects I was technically responsible for the video system:
        </p>
        <WorkExperience />
        <button className="close" onClick={() => setShowModal(false)}>
          Return to main page
        </button>
      </div>
    </div>
  );
}

export default About;
