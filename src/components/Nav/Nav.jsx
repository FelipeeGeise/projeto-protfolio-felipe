import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [information, setInformation] = useState(false); // Controla a exibição do conteúdo

  return (
    <div className="container">
      {/* Renderiza a div apenas se o estado 'information' for true */}
      {information && (
        <div className="information">
          <h1 className="titulo">
            Olá, eu sou Felipe Thiago Desenvolvedor Full-stack
          </h1>
          <p className="paragrafo-titulo">
            Um apaixonado Desenvolvedor Full-stack, dedicado a transformar
            ideias em soluções práticas e eficientes. Minha jornada na
            tecnologia é marcada pela constante busca por aprendizado, inovação
            e excelência, combinando habilidades de front-end e back-end para
            criar experiências digitais poderosas. Cada linha de código reflete
            minha paixão em conectar pessoas e facilitar suas vidas por meio da
            tecnologia. Seja bem-vindo ao meu universo de desenvolvimento!
          </p>
        </div>
      )}

      <button
        className="button-Nav"
        onClick={() => setInformation(!information)} // Alterna o estado
      >
        {information ? "Fechar" : "Saber mais"} {/* Texto dinâmico */}
      </button>
    </div>
  );
}

export default Nav;
