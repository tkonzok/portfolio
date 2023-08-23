import { useInView } from "react-intersection-observer";
import "../styles/style.css";
import HtmlLogo from "../assets/icons/html.svg";
import CssLogo from "../assets/icons/css.svg";
import JsLogo from "../assets/icons/javascript.svg";
import PythonLogo from "../assets/icons/python.svg";
import WebpackLogo from "../assets/icons/webpack.svg";
import GitLogo from "../assets/icons/git.svg";
import JestLogo from "../assets/icons/jest.svg";
import ReactLogo from "../assets/icons/react.svg";
import ViteLogo from "../assets/icons/vite.svg";
import VitestLogo from "../assets/icons/vitest.svg";
import NodeLogo from "../assets/icons/nodejs.svg";
import MongoLogo from "../assets/icons/mongodb.svg";
import PandasLogo from "../assets/icons/pandas.svg";
import PyTorchLogo from "../assets/icons/pytorch.svg";
import TypescriptLogo from "../assets/icons/typescript.svg";

function Skillset({ skillset, inView }) {
  const array = skillset.map((skill, index) => (
    <img
      key={index}
      className={inView ? "tech-logo inView" : "tech-logo"}
      src={skill}
      alt="Tech Stack Logo"
    ></img>
  ));

  return <>{array}</>;
}

function Skills() {
  const [ref1, inView1] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div>
      <h1>Skills</h1>
      <div className="skills">
        <div className="primary" ref={ref1}>
          <h2>Languages</h2>
          <Skillset
            skillset={[HtmlLogo, CssLogo, JsLogo, PythonLogo]}
            inView={inView1}
          />
        </div>
        <div className="secondary" ref={ref2}>
          <h2>Libraries</h2>
          <Skillset
            skillset={[ReactLogo, PandasLogo, PyTorchLogo]}
            inView={inView2}
          />
        </div>
        <div className="misc" ref={ref3}>
          <h2>Misc</h2>
          <Skillset
            skillset={[GitLogo, WebpackLogo, ViteLogo, JestLogo, VitestLogo]}
            inView={inView3}
          />
        </div>
        <div className="learning" ref={ref4}>
          <h2>Learning</h2>
          <Skillset
            skillset={[TypescriptLogo, NodeLogo, MongoLogo]}
            inView={inView4}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
