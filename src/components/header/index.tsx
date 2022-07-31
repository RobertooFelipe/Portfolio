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
                <div className='listOptions'>
                    <li className='ListaHeader'>
                        <a href="#Competencias"><ul>Competências</ul></a>
                        <a href="#Projetos"><ul>Projetos</ul></a>
                        <a href="#AboutMe"><ul>Sobre Mim</ul></a>
                        <a href="#Contato"><ul>Contato</ul></a>
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
                        <a href="#Competencias"><ul>Competências</ul></a>
                        <a href="#Projetos"><ul>Projetos</ul></a>
                        <a href="#AboutMe"><ul>Sobre Mim</ul></a>
                        <a href="#Contato"><ul>Contato</ul></a>
                    </li>
                </div>
            </div>
        </div>
    )
}


