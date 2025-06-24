import { FolderGit2, MailPlus } from "lucide-react";
import "./LandingMenu.css";

export default function LandingMenu() {
  return (
    <div className="landing-menu-container">
      <a href="/projetos" className="landing-menu-item">
        <p>Conheça meus projetos</p> <FolderGit2 />
      </a>
      <a href="/contato" className="landing-menu-item">
        <p>Entre em contato</p> <MailPlus />
      </a>
    </div>
  );
}
