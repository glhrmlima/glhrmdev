import "./header.css";
import { GalleryVerticalEnd, HomeIcon, Mail } from "lucide-react";

export default function Header() {
  return (
    <div className="header-div">
      <header className="header-container">
        <h1>glhrmdev</h1>
        <div className="header-menu">
          <nav>
            <a className="nav-home" href="/">
              <HomeIcon size={16} />
              <p>Início</p>
            </a>
            <a className="nav-projetos" href="/projetos">
              <GalleryVerticalEnd size={16} />
              <p>Projetos</p>
            </a>
            <a className="nav-contato" href="/contato">
              <Mail size={16} />
              <p>Contato</p>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
