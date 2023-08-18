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
  const { refHero, inViewHero } = useInView({ threshold: 0.5, delay: 1000 });
  const { refAbout, inViewAbout } = useInView({ threshold: 0.5, delay: 1000 });
  const { refProjects, inViewProjects } = useInView({
    threshold: 0.5,
    delay: 1000,
  });
  const { refContact, inViewContact } = useInView({
    threshold: 0.5,
    delay: 1000,
  });

  const [currentPage, setCurrentPage] = useState(0);

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
        className={inViewHero ? "arrow-up not-shown" : "arrow-up shown"}
        onClick={handleClick}
      >
        <img src={ArrowUp} alt="Arrow" />
      </button>
    );
  }

  return (
    <>
      {!inViewHero && <Nav currentPage={currentPage} />}
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
      {!inViewHero && <Arrow />}
    </>
  );
}

export default App;
