import { Header } from "./components/header";
import { RobertoFelipe } from "./components/robertoFelipe";
import { Competencias } from "./components/competencias";
import { Projetos } from "./components/projetos";
import { Contato } from "./components/contato";
import "./home.css";

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
                Me chamo Roberto Felipe, atualmente tenho 19 anos, sou uma
                pessoa sempre motivada para o trabalho individual e em equipe.
                Tenho respeito, franqueza e busco sempre o conhecimento e
                aprimoramento profissional e de outros assuntos de meu interesse
                cultural... Me dedico muito em meus projetos profissionais e
                pessoais, sempre visando os detalhes e buscando pelo melhor
                jeito de desenvolver uma funcionalidade.
                <br />
                <br />
                Além da programação, tenho 2 hobbys, o de UI/UX designer e o de
                desenvolvedor de modelos 3Ds. Gosto muito de me aprofundar nos
                conceitos de UI/UX, com esse hobby consegui desenvolver muito
                esse lado de designer, um bom exemplo seria as 10 heurísticas de
                Nielsen cujo sempre viso aplica-las em meus projetos. Sempre
                gostei muito de jogos, então acabei adquirindo um grande
                interesse de como eles são feitos, e a partir disso desenvolvi a
                habilidade de criar modelos 3Ds, em que levo essa habilidade
                como um hobby por gostar muito. Mas o que eu amo mesmo é a
                programação rs.
                <br />
                <br />
                Sou também um dos donos da página da Dev Team no instagram
                (@devteam.on), uma página focada em ensinar programação, a
                partir de dicas, post e reels.
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
            <Projetos
              title={"Byvent"}
              img={"/imagens/print-Byvent.png"}
              link={"https://github.com/RobertooFelipe/Byvent"}
              desc={
                "A ideia do Byvent vem de oferecermos um ambiente onde os usuários possam tanto comprar ingressos de eventos, quanto criá-los, fazendo com que unidos formaremos uma comunidade de eventos."
              }
            />
            <Projetos
              title={"E-Commerce"}
              img={"/imagens/print-Ecommerce.png"}
              link={"https://github.com/RobertooFelipe/eCommerce"}
              desc={
                "Este é um projeto no qual estou utilizando para aperfeiçoar meus conhecimentos. O intuito dele é criar um marketplace onde nossos clientes irão poder cadastrar suas contas e comprar produtos estéticos como bonés, sapatos, camisas... Este projeto é focado no Front-End, integrado com o firebase para consumo de dados e autenticação de dados."
              }
            />
            <Projetos
              title={"Tasks React"}
              img={"/imagens/print-TaksToDo.png"}
              link={"https://github.com/RobertooFelipe/TasksReact"}
              desc={
                "A ideia desta aplicação é criar um ambiente onde possamos realizar o controle de nossos objetivos através do método To Do, onde o usuário irá criar seus objetivos e poderá marca-los como concluídos assim que completos."
              }
            />
            <Projetos
              title={"Portfólio"}
              img={"/imagens/PortfolioWall.png"}
              link={"https://github.com/RobertooFelipe/Portfolio"}
              desc={
                "Neste projeto, fiz o meu portfólio, aprensentando um pouco mais sobre o meu lado profissional. O intuito deste projeto é agragar valor para a minha imagem profissional, este projeto é totalmente autoral, todas ideias vieram de mim mesmo, desde o UI/UX até o código. Este é um projeto em que irá apresentar diversar novas features conforme o tempo, já existem diversas ideias a serem implementadas, peço para que aguardem até o a disponibilização de uma nova atualização."
              }
            />
            <Projetos
              title={"CRUD Concepts - Express"}
              img={"/imagens/Express-CRUD.png"}
              link={"https://github.com/RobertooFelipe/NodeExpress-CRUD"}
              desc={
                "Neste projeto, criei uma aplicação bem simpres utilizando o Express, aplicando todos os métodos como POST, PUT, GET e DELETE em uma página por HTTP. Este projeto funcionará como uma base de pesquisa para meu próximo projeto, o Tasks to Do, cujo já está em produção!"
              }
            />
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
