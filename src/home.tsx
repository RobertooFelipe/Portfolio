import { Header } from "./components/header";
import { RobertoFelipe } from "./components/robertoFelipe";
import { Competencias } from "./components/competencias";
import { Projetos } from "./components/projetos";
import { Contato } from "./components/contato";
import './home.css';

function Portfolio() {

  return (
    <div>
      <Header />
      <RobertoFelipe />

      <section className="bodySection">

        <div className="aboutMe" id="AboutMe">
          <div className="titleAbout">
            <h1>Sobre Mim</h1>
          </div>

          <article className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner">
              <p>
                Me chamo Roberto Felipe, atualmente tenho 18 anos, sou uma pessoa pró-ativa assídua, sempre motivado para o trabalho individual e em equipe, tenho respeito, franqueza e busco sempre o conhecimento e aprimoramento profissional e de outros assuntos de meu interesse cultural, tenho um bom relacionamento em geral...
                Em minha carreira profissional até agora, já participei de diversas situações que exigiram muitos pontos de mim, sejam compromissos com prazos, análises de solicitações de serviços, levantamento de demandas de clientes, rafatoramento de códigos legados, otimizações de sistemas, integrações de sistemas, tratamento de dados, conexão de servidores, reuniões, responsabilidades burocráticas, entre outras exigências...
                Além da programação, tenho 2 hobbys, o UI/UX designer e o desenvolvedor de modelos 3Ds. Gosto muito de me aprofundar nos conceitos de UI/UX designer, sempre tive muita facilidade em desenvolver o Front-End de sistemas, com esse hobby consegui desenvolver muito esse lado de conceitos de design, um bom exemplo seria as 10 heurísticas de Nielsen que tenho domínio. Já com o desenvolvimento de modelos 3Ds, confesso que é algo que amo muito fazer porém só tenho mais contato em meu tempo livre, sempre gostei muito jogos, então decidi fazer um curso de desenvolvimento de jogos, com ele conheci a área de Level Design, cujo foi a área que mais gostei de mexer em manipulação de objetos 3Ds.
                <br />
                <br />
                Sou um dos donos da página da Dev Team no instagram (devteam.on), uma página focada em ensinar programação, a partir de dicas, concelhos, reels, posts diários... Também vendemos nossos seriços como desenvolvedores de sites e sistemas sob demanda.
                <br />
                <br />
                Já li livros como: O Poder, Mais Esperto Que o Diabo, Pai Rico Pai Pobre, que me trouxeram um série de conhecimentos que jamais irei esquer. Atualmente estou lendo "O Poder do Hábito", neste livro estou vendo como os hábitos funcionam, sejam pessoais ou até empresariais.
              </p>
            </div>
          </article>
        </div>


        <div className="compMe" id="Competencias">
          <div className="titleComp">
            <h1>Competências</h1>
          </div>
          <div className="Competencias">
            <Competencias />
          </div>
        </div>


        <div className="aboutMe" id="Projetos">
          <div className="titleAbout">
            <h1>Projetos</h1>
          </div>
          <div className="cardProjetos">
            <Projetos />
            <Projetos />
            <Projetos />
            <Projetos />
          </div>
        </div>


        <div className="contactMe" id="Contato">
          <div className="titleAbout aboutMe">
            <h1>Contato</h1>
          </div>
          <div>
            <Contato />
          </div>
        </div>
      </section>
    </div>
  );


}

export default Portfolio;
