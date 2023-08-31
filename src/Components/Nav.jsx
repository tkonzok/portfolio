import { useSwipeable } from "react-swipeable";
import "../styles/style.css";
import MenuIconWhite from "../assets/icons/menu_white.svg";
import MenuIcon from "../assets/icons/menu.svg";

function Nav({ currentPage, menuCollapsed, onClick }) {
  function Menu({ currentPage, menuCollapsed, onClick }) {
    const swipeConfig = {
      delta: 10,
      preventDefaultTouchMove: false,
      trackTouch: true,
      trackMouse: true,
      rotationAngle: 0,
    };

    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => onClick(false),
      onSwipedRight: () => onClick(true),
      ...swipeConfig,
    });

    const handleClick = () => {
      return onClick(!menuCollapsed);
    };

    const jumpToPage = (id) => {
      const pages = [
        ".hero-container",
        ".about-container",
        ".skills-container",
        ".projects-container",
        ".contact-container",
      ];
      const selectedPage = document.querySelector(pages[id]);
      selectedPage.scrollIntoView({ behavior: "smooth" });
    };

    const links = ["Home", "About", "Skills", "Projects", "Contact"];

    const arrayLinks = links.map((link, index) => (
      <a
        key={index}
        onClick={() => {
          {
            jumpToPage(index);
            onClick(true);
          }
        }}
        className={
          currentPage === index ? "is-current-page" : "not-current-page"
        }
      >
        {link}
      </a>
    ));

    return (
      <>
        <div className="menu">
          <button
            className={
              menuCollapsed ? "menu-btn collapsed" : "menu-btn extended"
            }
            onClick={handleClick}
          >
            <img
              src={menuCollapsed ? MenuIconWhite : MenuIcon}
              alt="Menu icon"
              width="32px"
            />
          </button>
          <div
            className={menuCollapsed ? "menu-links hidden" : "menu-links shown"}
          >
            <div {...swipeHandlers} className="menu-swipe-container"></div>
            {arrayLinks}
          </div>
        </div>
      </>
    );
  }

  return (
    <nav className={currentPage === 0 ? "bg-transparent" : "bg-red"}>
      <h3>Tobias Konzok</h3>
      <Menu
        currentPage={currentPage}
        menuCollapsed={menuCollapsed}
        onClick={onClick}
      />
    </nav>
  );
}

export default Nav;
