import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useSwipeable } from "react-swipeable";
import "../styles/style.css";
import Dataset from "../assets/data.json";
import Github from "../assets/icons/github.svg";
import GithubWhite from "../assets/icons/github_white.svg";
import Open from "../assets/icons/open-in-new.svg";
import OpenWhite from "../assets/icons/open-in-new_white.svg";
import ArrowUp from "../assets/icons/arrow-up-bold-circle.svg";

function ProjectCarousel() {
  const animationDuration = 500; // milliseconds
  const numberProjectsToShow = 5; // number of projects to fetch from data to prevent showing the older ones
  const [penultimateProject, setPenultimateProject] = useState(
    numberProjectsToShow - 1
  );
  const [prevProject, setPrevProject] = useState(numberProjectsToShow - 1);
  const [currProject, setCurrProject] = useState(0);
  const [nextProject, setNextProject] = useState(1);
  const [nextButOneProject, setNextButOneProject] = useState(2);
  const [toPrev, setToPrev] = useState(0);
  const [toNext, setToNext] = useState(0);

  const imageLinks = [];
  for (let i = 0; i < numberProjectsToShow; i++) {
    imageLinks.push(`./projects/${Dataset.data[i].screenshot}.png`);
  }

  function handlePrevClick() {
    setToPrev(1);
    console.log("animation start");
    setTimeout(() => {
      if (penultimateProject === 0) {
        setPenultimateProject(numberProjectsToShow - 1);
        setPrevProject(penultimateProject);
        setCurrProject(prevProject);
        setNextProject(currProject);
        setNextButOneProject(nextProject);
      } else {
        setPenultimateProject(penultimateProject - 1);
        setPrevProject(penultimateProject);
        setCurrProject(prevProject);
        setNextProject(currProject);
        setNextButOneProject(nextProject);
      }
      console.log("content updated");
      console.log(toPrev);
    }, animationDuration);
  }

  useEffect(() => {
    setToPrev(0);
    setToNext(0);
  }, [currProject]);

  function handleNextClick() {
    setToNext(1);
    setTimeout(() => {
      if (nextButOneProject === numberProjectsToShow - 1) {
        setPenultimateProject(prevProject);
        setPrevProject(currProject);
        setCurrProject(nextProject);
        setNextProject(nextButOneProject);
        setNextButOneProject(0);
      } else {
        setPenultimateProject(prevProject);
        setPrevProject(currProject);
        setCurrProject(nextProject);
        setNextProject(nextButOneProject);
        setNextButOneProject(nextButOneProject + 1);
      }
    }, animationDuration);
  }

  const config = {
    delta: 10,
    preventDefaultTouchMove: false,
    trackTouch: true,
    trackMouse: true,
    rotationAngle: 0,
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextClick(),
    onSwipedRight: () => handlePrevClick(),
    ...config,
  });

  function ProjectCards() {
    return (
      <div className="project-carousel">
        <div
          className="penultimateProject project-card"
          toprev={toPrev}
          tonext={toNext}
        >
          <a href="#">
            <img
              src={imageLinks[penultimateProject]}
              alt="Penultimate Project"
              className="project-image"
            />
          </a>
          <p className="project-name">
            {Dataset.data[penultimateProject].title}
          </p>
          <a href="#" className="project-link">
            <img src={GithubWhite} alt="Link to Project Code on Github" />
          </a>
          <a href="#" className="project-link">
            <img src={OpenWhite} alt="Link To Project Webpage" />
          </a>
        </div>
        <div
          className="prevProject project-card"
          toprev={toPrev}
          tonext={toNext}
        >
          <a href="#">
            <img
              src={imageLinks[prevProject]}
              alt="Previous Project"
              className="project-image"
            />
          </a>
          <p className="project-name">{Dataset.data[prevProject].title}</p>
          <a href="#" className="project-link">
            <img src={GithubWhite} />
          </a>
          <a href="#" className="project-link">
            <img src={OpenWhite} alt="Link To Project Webpage" />
          </a>
        </div>
        <div
          {...handlers}
          className="currentProject project-card"
          toprev={toPrev}
          tonext={toNext}
        >
          <a href={Dataset.data[currProject].livePreview}>
            <img
              src={imageLinks[currProject]}
              alt="Current Project"
              className="project-image"
            />
          </a>
          <p className="project-name">{Dataset.data[currProject].title}</p>
          <a href={Dataset.data[currProject].github} className="project-link">
            <img src={GithubWhite} alt="Link to Project Code on Github" />
          </a>
          <a
            href={Dataset.data[currProject].livePreview}
            className="project-link"
          >
            <img src={OpenWhite} alt="Link To Project Webpage" />
          </a>
        </div>
        <div
          className="nextProject project-card"
          toprev={toPrev}
          tonext={toNext}
        >
          <a href="#">
            <img
              src={imageLinks[nextProject]}
              alt="Next Project"
              className="project-image"
            />
          </a>
          <p className="project-name">{Dataset.data[nextProject].title}</p>
          <a href="#" className="project-link">
            <img src={GithubWhite} alt="Link to Project Code on Github" />
          </a>
          <a href="#" className="project-link">
            <img src={OpenWhite} alt="Link To Project Webpage" />
          </a>
        </div>
        <div
          className="nextButOneProject project-card"
          toprev={toPrev}
          tonext={toNext}
        >
          <a href="#">
            <img
              src={imageLinks[nextButOneProject]}
              alt="Next But One Project"
              className="project-image"
            />
          </a>
          <p className="project-name">
            {Dataset.data[nextButOneProject].title}
          </p>
          <a href="#" className="project-link">
            <img src={GithubWhite} alt="Link to Project Code on Github" />
          </a>
          <a href="#" className="project-link">
            <img src={OpenWhite} alt="Link To Project Webpage" />
          </a>
        </div>

        <button onClick={handlePrevClick} className="prevButton">
          <img src={ArrowUp} alt="Arrow" className="turn-left-90" />
        </button>
        <button onClick={handleNextClick} className="nextButton">
          <img src={ArrowUp} alt="Arrow" className="turn-right-90" />
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="project-carousel-container">
        <ProjectCards />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <>
      <ProjectCarousel />
    </>
  );
}

export default Projects;
