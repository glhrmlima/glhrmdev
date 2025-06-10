import { ArrowUpRight } from "lucide-react";
import "./CardProjeto.css";

export default function CardProjeto(props) {
  return (
    <section className="card">
      <div className="card-img">
        <div className="card-imgs pv delete"></div>
        <img src={props.img} alt={props.alt} />
      </div>

      <div className="project-info">
        <div className="flex">
          <div className="project-title">{props.nome}</div>
        </div>
        <span className="lighter">{props.descricao}</span>

        <div className="tags">
          <p>{props.tags}</p>
        </div>

        <div className="link-div">
          <a href={props.link} className="link-btn" target="_blank">
            Conheça <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
