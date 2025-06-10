import "./skills.css";

import skillCss from "../svgs/css3.svg";
import skillGit from "../svgs/git.svg";
import skillGithub from "../svgs/github.svg";
import skillHtml from "../svgs/html5.svg";
import skillIllustrator from "../svgs/adobe-illustrator.svg";
import skillJavascript from "../svgs/javascript.svg";
import skillPhotoshop from "../svgs/adobe-photoshop.svg";
import skillReact from "../svgs/react.svg";
import skillScrum from "../svgs/scrum.svg";
import skillTypeScript from "../svgs/typescript.svg";
import skillTailwind from "../svgs/tailwind.svg";
import skillJava from "../svgs/java.svg";

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-div">
        <h4>Minhas habilidades</h4>
        <div className="skills-icons">
          <img src={skillReact} title="React" alt="React" />
          <img src={skillTypeScript} title="TypeScript" alt="TypeScript" />
          <img src={skillTailwind} title="Tailwind Css" alt="Tailwind CSS" />
          <img src={skillJavascript} title="JavaScript" alt="Javascript" />
          <img src={skillJava} title="Java" alt="Java" />
          <img src={skillCss} title="Css 3" alt="Css 3" />
          <img src={skillHtml} title="Html 5" alt="Html 5" />
          <img
            src={skillScrum}
            title="Metodologias Ágeis - SCRUM"
            alt="Scrum"
          />
          <img src={skillGit} title="Git" alt="Git" />
          <img src={skillGithub} title="GitHub" alt="Github" />
          <img src={skillPhotoshop} title="Adobe Photoshop" alt="Photoshop" />
          <img
            src={skillIllustrator}
            title="Adobe Illustrator"
            alt="Illustrator"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
