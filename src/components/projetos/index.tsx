import './style.css';

export function Projetos() {

    return (
        <article className="cardProject">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>

            <div className="card-inner">
                <div className='imgProjects'>
                    <img src="\imagens\PortfolioWall.png" alt="" />
                </div>
                <div className='textButton'>
                    <p className='textProject'>
                        Neste projeto, fiz o meu portfólio, aprensentando um pouco mais sobre o meu lado profissional. O intuito deste projeto é agragar valor para a minha
                        imagem profissional, este projeto é totalmente autoral, todas ideias vieram de mim mesmo, desde o UI/UX até o código. Este é um projeto em que irá apresentar
                        diversar novas features conforme o tempo, já existem diversas ideias a serem implementadas, peço para que aguardem até o a disponibilização de uma nova atualização.
                    </p>
                    <a href="https://github.com/RobertooFelipe/Portfolio"><button className='gitHub'><img src="\imagens\icons8-github.svg" alt="" />Git Hub</button></a>
                </div>

            </div>
        </article>
    )
}

