import "./landing.css";
import imgLanding from "../img/guido-landing-page.png";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export default function Landing() {
  return (
    <section className="landing-container">
      <div className="landing-div">
        <img src={imgLanding} alt="Guido Lima" />
      </div>
      <div className="landing-div">
        <div className="landing-text-div">
          <h2>
            Olá,
            <br />
            Mundo!
          </h2>
          <h3>Sou o Guido</h3>
          <p>
            Desenvolvedor Front-End e designer gráfico.
            <br />
            Tecnologias mais utilizadas: <span>React + Tailwind.</span>
          </p>
          <div className="landing-social">
            <a href="http://linkedin.com/in/guilherme-lo">
              <LinkedinIcon strokeWidth={1.5} />
            </a>
            <a href="http://github.com/glhrmlima">
              <GithubIcon strokeWidth={1.5} />
            </a>
            <a href="http://instagram.com/guidolimaoliveira">
              <InstagramIcon strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
