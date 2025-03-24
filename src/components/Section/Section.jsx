import "./Section.css";

//assets
import TimeLine from "../../assets/timeline.png";

function Section() {
  return (
    <section>
      <h1 className="biografia-title">Sobre mim</h1>

      <div className="number-data">
        <h1 className="sobre-mim-data">2022</h1>
        <h1 className="sobre-mim-data">2023</h1>
        <h1 className="sobre-mim-data">2024</h1>
        <h1 className="sobre-mim-data">2025</h1>
      </div>
      <div className="timeline">
        <img src={TimeLine} alt="" />
      </div>

      <div className="container-sobre-mim">
        <div className="container-div">
          <p className="descrever">
            Em 2022, descobri o universo da programação e fui cativado pela
            ideia de transformar linhas de código em soluções criativas. Foi
            nesse ano que meu interesse pelo JavaScript nasceu — uma linguagem
            versátil que me encantou pela sua capacidade de dar vida às páginas
            web e criar experiências interativas.
          </p>
        </div>

        <div className="container-div">
          <p className="descrever">
            Em 2023, decidi dar continuidade à minha jornada na programação e me
            matriculei em um curso de desenvolvimento Full-stack. Esse passo foi
            crucial para aprofundar meus conhecimentos tanto no front-end quanto
            no back-end, me permitindo entender e construir aplicações completas
            e robustas.
          </p>
        </div>

        <div className="container-div">
          <p className="descrever">
            Em 2024, tive a oportunidade de conhecer a instituição DNC, e ela
            rapidamente se destacou como um lugar ideal para dar um próximo
            passo importante na minha carreira. Foi então que decidi me
            matricular no curso de Engenharia de Software, com o objetivo de
            ampliar meus conhecimentos e habilidades na área de desenvolvimento.
          </p>
        </div>

        <div className="container-div">
          <p className="descrever">
            Através da escola DNC, tive a oportunidade de aprimorar minhas
            habilidades e desenvolver projetos de forma mais profissional
            utilizando o framework React.js, além de HTML e CSS. Esse
            aprendizado prático me permitiu aplicar conceitos avançados e
            trabalhar em soluções mais robustas e sofisticadas. Em 2025,
            continuo a jornada no curso, consolidando ainda mais meus
            conhecimentos e me preparando para desafios ainda maiores no mundo
            da tecnologia e desenvolvimento de software.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section;
