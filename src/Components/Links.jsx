import { useInView } from "react-intersection-observer";
import "../styles/style.css";
import EmailWhite from "../assets/icons/email_white.svg";
import GithubWhite from "../assets/icons/github_white.svg";
import LinkedinWhite from "../assets/icons/linkedin_white.svg";
import XingWhite from "../assets/icons/xing_white.svg";

function Links({ effect }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="links" ref={ref}>
      <a
        href="mailto:konzok.tobias@gmail.com"
        className={
          inView && effect === "slide-in"
            ? "link slide-in from-left delay2"
            : "link"
        }
      >
        <img src={EmailWhite} alt="Email icon" className="email" />
      </a>
      <a
        href="https://github.com/tkonzok"
        className={
          inView && effect === "slide-in"
            ? "link slide-in from-left delay1-5"
            : "link"
        }
      >
        <img src={GithubWhite} alt="GitHub icon" className="github" />
      </a>
      <a
        href="https://linkedin.com/in/tobias-konzok"
        className={
          inView && effect === "slide-in"
            ? "link slide-in from-left delay1"
            : "link"
        }
      >
        <img src={LinkedinWhite} alt="LinkedIN icon" className="linkedin" />
      </a>
      <a
        href="https://xing.com/profile/tobias_konzok/cv"
        className={
          inView && effect === "slide-in"
            ? "link slide-in from-left delay0-5"
            : "link"
        }
      >
        <img src={XingWhite} alt="Xing icon" className="xing" />
      </a>
    </div>
  );
}

export default Links;
