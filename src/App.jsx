import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./styles/normalize.css";
import "./styles/style.css";
import Nav from "./Components/Nav.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import ArrowUp from "./assets/icons/arrow-up-bold-circle.svg";

function App() {
  const [refHero, inViewHero] = useInView({
    threshold: 0.25,
    delay: 100,
  });
  const [refAbout, inViewAbout] = useInView({ threshold: 0.25, delay: 100 });
  const [refProjects, inViewProjects] = useInView({
    threshold: 0.25,
    delay: 100,
  });
  const [refContact, inViewContact] = useInView({
    threshold: 0.25,
    delay: 100,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  function handleMenuClick(newMenuState) {
    setMenuCollapsed(newMenuState);
  }

  useEffect(() => {
    if (inViewHero) {
      setCurrentPage(0);
    } else if (inViewAbout) {
      setCurrentPage(1);
    } else if (inViewProjects) {
      setCurrentPage(2);
    } else if (inViewContact) {
      setCurrentPage(3);
    } else {
      setCurrentPage(0);
    }
  }, [inViewHero, inViewAbout, inViewProjects, inViewContact]);

  function Arrow() {
    const handleClick = () => {
      const firstPage = document.querySelector(".hero-container");
      firstPage.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <button
        className={inViewHero ? "arrow-up" : "arrow-up shown"}
        onClick={handleClick}
      >
        <img src={ArrowUp} alt="Arrow" />
      </button>
    );
  }

  return (
    <>
      <Nav
        currentPage={currentPage}
        menuCollapsed={menuCollapsed}
        onClick={handleMenuClick}
      />
      <section className="hero-container" ref={refHero}>
        <Hero />
      </section>
      <section className="about-container" ref={refAbout}>
        <About />
      </section>
      <section className="projects-container" ref={refProjects}>
        <Projects />
      </section>
      <section className="contact-container" ref={refContact}>
        <Contact />
      </section>
      <Arrow />
    </>
  );
}

export default App;
