import "./ProjetosLista.css";
import CardProjeto from "./CardProjeto";

import AluraMidi from "../img/projetos-aluramidi.jpg";
import Robotron from "../img/projetos-robotron-2000.jpg";
import NumeroSecreto from "../img/projetos-numero-secreto.png";
import Organo from "../img/projetos-organo.jpg";

export default function ProjetosLista() {
  return (
    <section className="projetos-container">
      <CardProjeto
        nome="Organo (React)"
        descricao="SPA com CRUD completo desenvolvida com React. Conceitos de renderização condicional, iteração, hooks (useState, useEffects) e VirtualDOM."
        tags="#REACT #JAVASCRIPT #ALURA"
        img={Organo}
        alt="Organo"
        link="https://organo-alura-glhrmlima.vercel.app/"
      />
      <CardProjeto
        nome="Número Secreto"
        descricao='Criação de uma aplicação de "Adivinhe o Número Secreto" com integração com a Web Speech API para reconhecimento de voz.'
        tags="#JAVASCRIPT #API #MATH.RANDOM #ALURA"
        img={NumeroSecreto}
        alt="Número Secreto"
        link="https://adivinhe-o-numero-secreto-glhrmlima.vercel.app/"
      />
      <CardProjeto
        nome="Robotron 2000"
        descricao="Projeto utilizando HTML, CSS e JavaScript Vanilla para aplicar conceitos de Manipulação do DOM."
        tags="#JAVASCRIPT #DOM #HTML #CSS #ALURA"
        img={Robotron}
        alt="Robotron 2000"
        link="https://manipulando-dom-glhrmlima.vercel.app/"
      />
      <CardProjeto
        nome="AluraMidi"
        descricao="Projeto utilizando HTML, CSS e JavaScript Vanilla para criar um instrumento digital de percussão. Conceitos de Manipulação do DOM e criação de listas com JavaScript."
        tags="#JAVASCRIPT #DOM #HTML #CSS #ALURA"
        img={AluraMidi}
        alt="AluraMidi"
        link="https://aluramidi-glhrmlima.vercel.app/"
      />
    </section>
  );
}
