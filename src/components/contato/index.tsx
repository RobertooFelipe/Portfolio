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
                        <a href="https://www.linkedin.com/in/roberto-felipe-nhani-de-oliveira-b96a40209/"><button className='gitHubContact'><img src="\imagens\linkedin-svg.svg" alt="" />Linkedin</button></a>
                    </div>
                    <div>
                        <h2>GitHub</h2>
                        <a href="https://github.com/RobertooFelipe"><button className='gitHubContact'><img src="\imagens\icons8-github.svg" alt="" />Git Hub</button></a>
                    </div>
                </div>
            </section>

            <div className='verticalLine'></div>

            <div className='textContact'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sint, optio molestias voluptate sapiente porro repudiandae reiciendis, numquam minus modi quae incidunt a distinctio. Labore, laudantium nesciunt? Asperiores, natus voluptatem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sint, optio molestias voluptate sapiente porro repudiandae reiciendis, numquam minus modi quae incidunt a distinctio. Labore, laudantium nesciunt? Asperiores, natus voluptatem.</p>
            </div>
        </div>
    )
}