import { useState, useRef, useEffect } from "react";
import "../styles/style.css";
import MenuIconWhite from "../assets/icons/menu_white.svg";

function Nav({ currentPage }) {
  function Menu({ currentPage }) {
    const [menuCollapsed, setMenuCollapsed] = useState(true);

    const handleClick = () => {
      setMenuCollapsed(!menuCollapsed);
    };

    const jumpToPage = (id) => {
      const pages = [
        ".hero-container",
        ".about-container",
        ".projects-container",
        ".contact-container",
      ];
      const selectedPage = document.querySelector(pages[id]);
      selectedPage.scrollIntoView({ behavior: "smooth" });
    };

    const links = ["Home", "About", "Projects", "Contact"];

    const arrayLinks = links.map((link, index) => (
      <a
        key={index}
        onClick={() => {
          {
            jumpToPage(index);
          }
        }}
        className={currentPage === index ? "current-page" : ""}
      >
        {link}
      </a>
    ));

    return (
      <div className="menu">
        <button onClick={handleClick}>
          <img
            src={MenuIconWhite}
            alt="Menu icon"
            width="32px"
            className={menuCollapsed ? "menu collapsed" : "menu extended"}
          />
        </button>
        <div
          className={menuCollapsed ? "menu-links hidden" : "menu-links shown"}
        >
          {arrayLinks}
        </div>
      </div>
    );
  }

  return (
    <nav>
      <h3>Tobias Konzok</h3>
      <Menu currentPage={currentPage} />
    </nav>
  );
}

export default Nav;
