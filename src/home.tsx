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

        <div className="aboutMe">
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
                Tenho 18 anos, sou pró-ativo assíduo, sempre motivado para o trabalho em equipe, tenho respeito, franqueza e busco sempre o conhecimento e aprimoramento técnico/profissional e de outros assuntos de meu interesse cultural, tenho um bom relacionamento em geral... Além da programação, tenho o UI/UX designer como hobby, já entreguei diversos produtos (Publicações, logos, promoções, posts de engajamento,...) desta área para clientes.
                Já li livros como: O Poder, Mais Esperto Que o Diabo, Pai Rico Pai Pobre. Atualmente estou lendo O Poder do Hábito.
                Tenho 18 anos, sou pró-ativo assíduo, sempre motivado para o trabalho em equipe, tenho respeito, franqueza e busco sempre o conhecimento e aprimoramento técnico/profissional e de outros assuntos de meu interesse cultural, tenho um bom relacionamento em geral... Além da programação, tenho o UI/UX designer como hobby, já entreguei diversos produtos (Publicações, logos, promoções, posts de engajamento,...) desta área para clientes.
                Já li livros como: O Poder, Mais Esperto Que o Diabo, Pai Rico Pai Pobre. Atualmente estou lendo O Poder do Hábito.
              </p>
            </div>
          </article>
        </div>


        <div className="compMe">
          <div className="titleComp">
            <h1>Competências</h1>
          </div>
          <div className="Competencias">
            <Competencias />
          </div>
        </div>


        <div className="aboutMe">
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


        <div className="contactMe">
          <div className="titleAbout">
            <h1>Projetos</h1>
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
