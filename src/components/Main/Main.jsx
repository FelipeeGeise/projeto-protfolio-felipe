import "./Main.css";

//assets

function Main() {
  return (
    <div className="tag-principal">
      <h1  className="projeto-h1">
        Projetos
      </h1>
      <main>
        {/*Projeto 1*/}
        <div className="div-principal">
          <div className="div-img">
            <img src="./public/img-responsivo.png" alt="Imagem do Projeto 1" />
          </div>

          <div className="div-letras">
            <h2>Página Web</h2>
            <p className="paragrafo-main">
              Este projeto foi desenvolvido utilizando as tecnologias
              fundamentais para a web: HTML, CSS e JavaScript, garantindo uma
              experiência fluida, moderna e acessível para todos os usuários.
            </p>
          </div>

          <button
            className="Button-main"
            onClick={() =>
              window.open(
                "https://desafio-responsividade-two.vercel.app/",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            Clique aqui{" "}
          </button>
        </div>

        {/*Projeto 2*/}

        <div className="div-principal">
          <div className="div-img">
            <img
              src="./public/proj-arquitetura.png"
              alt="Imagem do Projeto 1"
            />
          </div>

          <div className="div-letras">
            <h2>Projeto de Arquitetura</h2>
            <p>
              Este projeto combina criatividade e tecnologia para destacar o
              melhor da arquitetura por meio do desenvolvimento web.Criamos uma
              plataforma visualmente cativante e funcional.
            </p>
          </div>
          <button
            className="Button-main"
            onClick={() =>
              window.open(
                "https://dnc-arq-felipe-psi.vercel.app/",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            {" "}
            Clique aqui{" "}
          </button>
        </div>

        {/*Projeto 3*/}

        <div className="div-principal">
          <div className="div-img">
            <img src="./public/Refri-respon.png" alt="Imagem do Projeto 1" />
          </div>

          <div className="div-letras">
            <h2>Projeto Refri</h2>
            <p>
              Este projeto tem como objetivo desenvolver um site moderno,
              funcional e visualmente atraente para uma marca de refrigerantes.
              Utilizando as tecnologias mais atuais de desenvolvimento web.
            </p>
          </div>
          <button
            className="Button-main"
            onClick={() =>
              window.open(
                "https://responsivo-one-ruby.vercel.app/",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            Clique aqui{" "}
          </button>
        </div>

        {/*Projeto 4*/}

        <div className="div-principal">
          <div className="div-img">
            <img
              src="./public/arquitetura-de-empresa.png"
              alt="Imagem do Projeto 1"
            />
          </div>

          <div className="div-letras">
            <h2>Arquitetura residencial e comercial</h2>
            <p>
              Este projeto de arquitetura residencial e comercial visa criar um espaço
              funcional, confortável, atendendo às
              necessidades de vida dos clientes.
            </p>
          </div>
          <button
            className="Button-main"
            onClick={() =>
              window.open(
                "https://desafio-responsividade-two.vercel.app/",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            Clique aqui{" "}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Main;
