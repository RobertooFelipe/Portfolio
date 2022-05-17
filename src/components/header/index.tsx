import { useState } from 'react';
import './style.css';


export function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    function InconListActive() {
        setMenuOpen(state => !state)
    };

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
                    <button className={`InconList ${menuOpen && "active"}`} onClick={InconListActive} >
                        <span className='line'></span>
                        <span className='line'></span>
                        <span className='line'></span>
                    </button>
                </div>
            </header>

            <div className={`DarknessBG ${menuOpen && "active"}`}>
                <div className={`Options ${menuOpen && "active"}`}>
                    <li className={`ListaMenu ${menuOpen && "active"}`}>
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


