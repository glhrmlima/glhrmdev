import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import "./ContatoSection.css";
import EmailForm from "./EmailForm";

export default function ContatoSection() {
  return (
    <div className="contato-container">
      <div className="contato-section">
        <div className="contato-links">
          <h3>Mande um sinal de fumaça digital:</h3>
          <div className="contato-social">
            <a
              href="http://linkedin.com/in/guilherme-lo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon strokeWidth={1.5} /> Linkedin
            </a>
            <a
              href="http://github.com/glhrmlima"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon strokeWidth={1.5} /> Github
            </a>
            <a
              href="http://instagram.com/guidolimaoliveira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon strokeWidth={1.5} /> Instagram
            </a>
          </div>
        </div>
        <div className="contato-form">
          <EmailForm />
        </div>
      </div>
    </div>
  );
}
