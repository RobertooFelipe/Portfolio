import './style.css';

export function Contato() {
    return (
        <div className='bgContact'>
            <section className='Contacts'>
                <h2>Meu e-mail</h2>
                <a href="mailto:feliperoberto092@gmail.com"><h3>feliperoberto092@gmail.com</h3></a>

                <div className='buttonsContact'>
                    <div>
                        <h2>Linkedin</h2>
                        <a href="https://www.linkedin.com/in/roberto-felipe-nhani-de-oliveira-b96a40209/">
                            <button className='gitHubContact'>
                                <img src="\imagens\linkedin-svg.svg" alt="" />Linkedin
                            </button>
                        </a>
                    </div>
                    <div>
                        <h2>GitHub</h2>
                        <a href="https://github.com/RobertooFelipe">
                            <button className='gitHubContact'>
                                <img src="\imagens\icons8-github.svg" alt="" />Git Hub
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <div className='verticalLine'></div>

            <div className='textContact'>
                <p>Gostaria de agradecer a sua visita em meu portfólio, este projeto foi realizado 100% por mim mesmo,
                    Roberto Felipe Nhani de Oliveira. Neste projeto apresentei para você o meu lado profissional, citando
                    pontos como minhas experiências, competências e projetos realizados... Mais uma vez, lhe agradeço pelo
                    seu tempo investido em conhecer um pouco mais sobre mim. Caso tenha interesse em entrar em contato
                    segue meu e-mail nesta mesma aba. Obrigado!</p>
                <br />
                <br />
                <p>
                    Projeto desenvolvido por <a href="https://github.com/RobertooFelipe">&copy;RobertooFelipe</a>
                </p>
            </div>
        </div>
    )
}