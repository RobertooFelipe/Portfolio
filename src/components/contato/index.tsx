import './style.css';

export function Contato() {
    return (
        <div className='bgContact'>
            <section className='textContact'>
                <h2>Contato via Email</h2>
                <a href="mailto:feliperoberto092@gmail.com"><h3>feliperoberto092@gmail.com</h3></a>

                <h2>Linkedin</h2>
                <button>Linkedin</button>

                <h2>GitHub</h2>
                <a href="https://github.com/RobertooFelipe"><button className='gitHubContact'><img src="\imagens\icons8-github.svg" alt="" />Git Hub</button></a>
            </section>
        </div>
    )
}