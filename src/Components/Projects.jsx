import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/style.css";
import Dataset from "../assets/data.json";
import Github from "../assets/icons/github.svg";
import GithubWhite from "../assets/icons/github_white.svg";
import Open from "../assets/icons/open-in-new.svg";
import OpenWhite from "../assets/icons/open-in-new_white.svg";

function ProjectCarousel() {
  const animationDuration = 500; // milliseconds
  const numberProjectsToShow = 5; // number of projects to fetch from data to prevent showing the older ones
  const [penultimateProject, setPenultimateProject] = useState(
    numberProjectsToShow - 1
  );
  const [prevProject, setPrevProject] = useState(numberProjectsToShow);
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
    }, animationDuration);
  }

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

  function ProjectCards() {
    return (
      <div className="project-carousel">
        <div
          className="penultimateProject project-card"
          toprev={toPrev}
          tonext={toNext}
          onAnimationEnd={() => {
            setToPrev(0);
            setToNext(0);
          }}
        >
          <a href={Dataset.data[penultimateProject].livePreview}>
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
          onAnimationEnd={() => {
            setToPrev(0);
            setToNext(0);
          }}
        >
          <a href={Dataset.data[prevProject].livePreview}>
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
          className="currentProject project-card"
          toprev={toPrev}
          tonext={toNext}
          onAnimationEnd={() => {
            setToPrev(0);
            setToNext(0);
          }}
        >
          <a href={Dataset.data[currProject].livePreview}>
            <img
              src={imageLinks[currProject]}
              alt="Current Project"
              className="project-image"
            />
          </a>
          <p className="project-name">{Dataset.data[currProject].title}</p>
          <a
            href={Dataset.data[currProject].githubwhite}
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
        </div>
        <div
          className="nextProject project-card"
          toprev={toPrev}
          tonext={toNext}
          onAnimationEnd={() => {
            setToPrev(0);
            setToNext(0);
          }}
        >
          <a href={Dataset.data[nextProject].livePreview}>
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
          onAnimationEnd={() => {
            setToPrev(0);
            setToNext(0);
          }}
        >
          <a href={Dataset.data[nextButOneProject].livePreview}>
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
      </div>
    );
  }

  return (
    <div>
      <div className="project-carousel-container">
        <ProjectCards />
        <button onClick={handlePrevClick} className="prevButton">
          PREV
        </button>
        <button onClick={handleNextClick} className="nextButton">
          NEXT
        </button>
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
