import './style.css';

export function Header() {
    return (
        <div>
            <header className='Header'>
                <div>
                    <h1 className='NameHeader'>Roberto Felipe</h1>
                </div>
                <div>
                    <li className='ListaHeader'>
                        <ul>Competências</ul>
                        <ul>Projetos</ul>
                        <ul>Sobre Mim</ul>
                        <ul>Contato</ul>
                    </li>
                </div>
                <div className='menu'>
                    <button className='InconList'>
                        <span className='line'></span>
                        <span className='line'></span>
                        <span className='line'></span>
                    </button>
                </div>
            </header>

            <div className='DarknessBG'>
                <div className='Options'>
                    <li className='ListaMenu'>
                        <ul>Competências</ul>
                        <ul>Projetos</ul>
                        <ul>Sobre Mim</ul>
                        <ul>Contato</ul>
                    </li>
                </div>
            </div>
        </div>
    )
}

const InconList = document.querySelector(".InconList")
const DarknessBG = document.querySelector(".DarknessBG")
const ListaMenu = document.querySelector(".ListaMenu")
const Options = document.querySelector(".Options")

const InconListActive = () => {
    console.log("clic")
    InconList?.classList.toggle("active")
    DarknessBG?.classList.toggle("active")
    ListaMenu?.classList.toggle("active")
    Options?.classList.toggle("active")
};

InconList?.addEventListener('click', InconListActive)