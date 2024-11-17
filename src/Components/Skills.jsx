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
import ExpressLogo from "../assets/icons/express.svg";
import PandasLogo from "../assets/icons/pandas.svg";
import PyTorchLogo from "../assets/icons/pytorch.svg";
import NumpyLogo from "../assets/icons/numpy.svg";
import TensorflowLogo from "../assets/icons/tensorflow.svg";
import TypescriptLogo from "../assets/icons/typescript.svg";
import AngularLogo from "../assets/icons/angular-original.svg";
import JasmineLogo from "../assets/icons/jasmine-original.svg";
import PulumiLogo from "../assets/icons/pulumi-original.svg";
import TailwindLogo from "../assets/icons/tailwindcss-original.svg";
import PlaywrightLogo from "../assets/icons/playwright-original.svg";
import NestLogo from "../assets/icons/nestjs.svg";
import AzureDevOpsLogo from "../assets/icons/azuredevops-original.svg";

function Skillset({ skillset, skillName, inView }) {
  const array = skillset.map((skill, index) => (
    <div
      key={index}
      className={inView ? "card-container inView show-flip" : "card-container"}
    >
      <div className="card">
        <div className="card-front">
          <img className="tech-logo" src={skill} alt="Tech Stack Logo"></img>
        </div>
        <div className="card-back">
          <p className="tech-name">{skillName[index]}</p>
        </div>
      </div>
    </div>
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
        <div className="frontend" ref={ref1}>
          <h2>Frontend</h2>
          <Skillset
            skillset={[TypescriptLogo, AngularLogo, ReactLogo, HtmlLogo, CssLogo, JsLogo]}
            skillName={["TypeScript", "Angular", "React", "HTML", "CSS", "JavaScript"]}
            inView={inView1}
          />
        </div>
        <div className="backend" ref={ref2}>
          <h2>Backend</h2>
          <Skillset
            skillset={[NestLogo, PythonLogo, NodeLogo, ExpressLogo, MongoLogo]}
            skillName={["Nest", "Python", "Node.js", "Express.js", "MongoDB"]}
            inView={inView2}
          />
        </div>
        <div className="misc" ref={ref3}>
          <h2>Misc</h2>
          <Skillset
            skillset={[
              GitLogo,
                JasmineLogo,
              JestLogo,
                PlaywrightLogo,
              VitestLogo,
              PandasLogo,
            ]}
            skillName={[
              "Git",
              "Jasmine",
              "Jest",
              "Playwright",
              "Vitest",
              "Pandas",
            ]}
            inView={inView3}
          />
        </div>
        <div className="learning" ref={ref4}>
          <h2>Learning</h2>
          <Skillset
            skillset={[AzureDevOpsLogo, PulumiLogo, TailwindLogo]}
            skillName={["Azure DevOps", "Pulumi", "Tailwind"]}
            inView={inView4}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
