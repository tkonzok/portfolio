import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSwipeable } from "react-swipeable";
import "../styles/style.css";
import Dataset from "../assets/data.json";
import GithubWhite from "../assets/icons/github_white.svg";
import OpenWhite from "../assets/icons/open-in-new_white.svg";
import ArrowUp from "../assets/icons/arrow-up-bold-circle.svg";
import HtmlLogo from "../assets/icons/html.svg";
import CssLogo from "../assets/icons/css.svg";
import JsLogo from "../assets/icons/javascript.svg";
import WebpackLogo from "../assets/icons/webpack.svg";
import BabelLogo from "../assets/icons/babel.svg";
import JestLogo from "../assets/icons/jest.svg";
import ReactLogo from "../assets/icons/react.svg";
import ViteLogo from "../assets/icons/vite.svg";
import VitestLogo from "../assets/icons/vitest.svg";
import NodeLogo from "../assets/icons/nodejs.svg";
import ExpressLogo from "../assets/icons/express.svg";
import MongoDBLogo from "../assets/icons/mongodb.svg";
import PugLogo from "../assets/icons/pug.svg";
import BootstrapLogo from "../assets/icons/bootstrap.svg";
import AngularLogo from "../assets/icons/angular-original.svg";
import NestLogo from "../assets/icons/nestjs.svg";
import TypescriptLogo from "../assets/icons/typescript.svg";

function Projects() {
  const animationDuration = 500; // milliseconds
  const numberProjectsToShow = 3; // number of projects to fetch from data to prevent showing the older ones
  const [penultimateProject, setPenultimateProject] =
    useState(numberProjectsToShow);
  const [prevProject, setPrevProject] = useState(numberProjectsToShow + 1);
  const [currProject, setCurrProject] = useState(2);
  const [nextProject, setNextProject] = useState(3);
  const [nextButOneProject, setNextButOneProject] = useState(4);

  // representing currently running transition as states
  const [toPrev, setToPrev] = useState(0);
  const [toNext, setToNext] = useState(0);

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

  const imageLinks = [];
  for (let i = 0; i < numberProjectsToShow + 2; i++) {
    imageLinks.push(`./projects/${Dataset.data[i].screenshot}.png`);
  }

  function handlePrevClick() {
    // start transition
    setToPrev(1);
    // update content after transition has finished
    setTimeout(() => {
      setCurrProject(prevProject);
      setPrevProject(penultimateProject);
      setNextProject(currProject);
      if (penultimateProject === 2) {
        setPenultimateProject(numberProjectsToShow + 1);
        setNextButOneProject(nextProject);
      } else {
        setPenultimateProject(penultimateProject - 1);
        setNextButOneProject(nextProject);
      }
    }, animationDuration);
  }

  // end transition
  useEffect(() => {
    setToPrev(0);
    setToNext(0);
  }, [currProject]);

  function handleNextClick() {
    // start transition
    setToNext(1);
    // update content after transition has finished
    setTimeout(() => {
      setCurrProject(nextProject);
      setPrevProject(currProject);
      setNextProject(nextButOneProject);
      if (nextButOneProject === numberProjectsToShow + 1) {
        setPenultimateProject(prevProject);
        setNextButOneProject(2);
      } else {
        setPenultimateProject(prevProject);
        setNextButOneProject(nextButOneProject + 1);
      }
    }, animationDuration);
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

  function Description({ project }) {
    // remove html code from descriptions (can be simplified once data.json has been updated)
    let result = project.description.split("<a href='").join("/split");
    result = result.split("'>").join("/split");
    result = result.split("</a>").join("/split");
    result = result.split("/split");
    if (result.length !== 4) return result[0];
    return (
      <>
        {result[0]}
        <a href={result[1]}>{result[2]}</a>
        {result[3]}
      </>
    );
  }

  function Technologies({ project }) {
    let result = [];
    let techs = project.technologies;
    if (techs.includes("angular")) result.push(AngularLogo);
    if (techs.includes("react")) result.push(ReactLogo);
    if (techs.includes("nest")) result.push(NestLogo);
    if (techs.includes("typescript")) result.push(TypescriptLogo);
    if (techs.includes("javascript")) result.push(JsLogo);
    if (techs.includes("html")) result.push(HtmlLogo);
    if (techs.includes("css")) result.push(CssLogo);
    if (techs.includes("webpack")) result.push(WebpackLogo);
    if (techs.includes("babel")) result.push(BabelLogo);
    if (techs.includes("jest")) result.push(JestLogo);
    if (techs.includes("vite")) result.push(ViteLogo);
    if (techs.includes("vitest")) result.push(VitestLogo);
    if (techs.includes("nodejs")) result.push(NodeLogo);
    if (techs.includes("express")) result.push(ExpressLogo);
    if (techs.includes("mongodb")) result.push(MongoDBLogo);
    if (techs.includes("pug")) result.push(PugLogo);
    if (techs.includes("bootstrap")) result.push(BootstrapLogo);
    const results = result.map((tech, index) => (
      <img
        key={index}
        className="tech-logo"
        src={tech}
        alt="Tech Stack Logo"
      ></img>
    ));
    return <div className="technologies">{results}</div>;
  }

  return (
    <div>
      <h1>PROJECTS</h1>
      <div
        ref={ref1}
        className={
          inView1
            ? "primaryProject project-card inView"
            : "primaryProject project-card"
        }
      >
        <img
          src={imageLinks[0]}
          alt="Primary Project"
          className="project-image"
        />
        <div className="content">
          <h3 className="project-name">{Dataset.data[0].title}</h3>
          <a href={Dataset.data[0].github} className="project-link">
            <img src={GithubWhite} alt="Link to Project Code on Github" />
          </a>
          <a href={Dataset.data[0].livePreview} className="project-link">
            <img src={OpenWhite} alt="Link To Project Webpage" />
          </a>
          <p className="project-description">
            <Description project={Dataset.data[0]} />
          </p>
        </div>
        <Technologies project={Dataset.data[0]} />
      </div>
      <div
        ref={ref2}
        className={
          inView2
            ? "secondaryProject project-card inView"
            : "secondaryProject project-card"
        }
      >
        <img
          src={imageLinks[1]}
          alt="Secondary Project"
          className="project-image"
        />
        <div className="content">
          <h3 className="project-name">{Dataset.data[1].title}</h3>
          <a href={Dataset.data[1].github} className="project-link">
            <img src={GithubWhite} alt="Link to Project Code on Github" />
          </a>
          <a href={Dataset.data[1].livePreview} className="project-link">
            <img src={OpenWhite} alt="Link To Project Webpage" />
          </a>
          <p className="project-description">
            <Description project={Dataset.data[1]} />
          </p>
        </div>
        <Technologies project={Dataset.data[1]} />
      </div>
      <h2 ref={ref3} className={inView3 ? "inView" : ""}>
        More Projects
      </h2>
      <div
        className={
          inView3
            ? "project-carousel-container inView"
            : "project-carousel-container"
        }
      >
        <div {...swipeHandlers} className="project-carousel">
          <div
            className="penultimateProject project-card"
            toprev={toPrev}
            tonext={toNext}
          >
            <img
              src={imageLinks[penultimateProject]}
              alt="Penultimate Project"
              className="project-image"
            />
            <div className="content">
              <h3 className="project-name">
                {Dataset.data[penultimateProject].title}
              </h3>
              <a href="#" className="project-link">
                <img src={GithubWhite} alt="Link to Project Code on Github" />
              </a>
              <a href="#" className="project-link">
                <img src={OpenWhite} alt="Link To Project Webpage" />
              </a>
              <p className="project-description">
                <Description project={Dataset.data[penultimateProject]} />
              </p>
            </div>
            <Technologies project={Dataset.data[penultimateProject]} />
          </div>
          <div
            className="prevProject project-card"
            toprev={toPrev}
            tonext={toNext}
          >
            <img
              src={imageLinks[prevProject]}
              alt="Previous Project"
              className="project-image"
            />
            <div className="content">
              <h3 className="project-name">
                {Dataset.data[prevProject].title}
              </h3>
              <a href="#" className="project-link">
                <img src={GithubWhite} />
              </a>
              <a href="#" className="project-link">
                <img src={OpenWhite} alt="Link To Project Webpage" />
              </a>
              <p className="project-description">
                <Description project={Dataset.data[prevProject]} />
              </p>
            </div>
            <Technologies project={Dataset.data[prevProject]} />
          </div>
          <div
            className="currentProject project-card"
            toprev={toPrev}
            tonext={toNext}
          >
            <img
              src={imageLinks[currProject]}
              alt="Current Project"
              className="project-image"
            />
            <div className="content">
              <h3 className="project-name">
                {Dataset.data[currProject].title}
              </h3>
              <a
                href={Dataset.data[currProject].github}
                className="project-link"
              >
                <img src={GithubWhite} alt="Link to Project Code on Github" />
              </a>
              <a
                href={Dataset.data[currProject].livePreview}
                className="project-link"
              >
                <img src={OpenWhite} alt="Link To Project Webpage" />
              </a>
              <p className="project-description">
                <Description project={Dataset.data[currProject]} />
              </p>
            </div>
            <Technologies project={Dataset.data[currProject]} />
          </div>
          <div
            className="nextProject project-card"
            toprev={toPrev}
            tonext={toNext}
          >
            <img
              src={imageLinks[nextProject]}
              alt="Next Project"
              className="project-image"
            />
            <div className="content">
              <h3 className="project-name">
                {Dataset.data[nextProject].title}
              </h3>
              <a href="#" className="project-link">
                <img src={GithubWhite} alt="Link to Project Code on Github" />
              </a>
              <a href="#" className="project-link">
                <img src={OpenWhite} alt="Link To Project Webpage" />
              </a>
              <p className="project-description">
                <Description project={Dataset.data[nextProject]} />
              </p>
            </div>
            <Technologies project={Dataset.data[nextProject]} />
          </div>
          <div
            className="nextButOneProject project-card"
            toprev={toPrev}
            tonext={toNext}
          >
            <img
              src={imageLinks[nextButOneProject]}
              alt="Next But One Project"
              className="project-image"
            />
            <div className="content">
              <h3 className="project-name">
                {Dataset.data[nextButOneProject].title}
              </h3>
              <a href="#" className="project-link">
                <img src={GithubWhite} alt="Link to Project Code on Github" />
              </a>
              <a href="#" className="project-link">
                <img src={OpenWhite} alt="Link To Project Webpage" />
              </a>
              <p className="project-description">
                <Description project={Dataset.data[nextButOneProject]} />
              </p>
            </div>
            <Technologies project={Dataset.data[nextButOneProject]} />
          </div>

          <button onClick={handlePrevClick} className="prevButton">
            <img src={ArrowUp} alt="Arrow" className="turn-left-90" />
          </button>
          <button onClick={handleNextClick} className="nextButton">
            <img src={ArrowUp} alt="Arrow" className="turn-right-90" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
