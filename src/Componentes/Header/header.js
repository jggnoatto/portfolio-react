import { useState } from "react";
import { Link } from "react-router-dom"; // Importante para as rotas funcionarem
import "./header.css";
import arrowUpRight from "../../assets/arrow-up-right.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <Link className="logo" to="/">João Gnoatto</Link>
                
                {/* --- DESKTOP MENU --- */}
                <ul className="nav-links desktop-only">
                    <li><a href="#sobre-mim">Sobre mim</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#projects">Projetos</a></li>
                </ul>

                <a className="contact desktop-only" href="https://wa.me/...">
                    Entre em contato
                    <img src={arrowUpRight} alt="Seta" />
                </a>

                {/* --- MOBILE MENU TRIGGER --- */}
                <div className="mobile-menu-wrapper mobile-only">
                    <button className="menu-trigger" onClick={() => setIsOpen(!isOpen)}>
                        <div className="hamburger">
                            <span style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                            <span style={{ opacity: isOpen ? 0 : 1 }}></span>
                            <span style={{ transform: isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></span>
                        </div>
                    </button>

                    {/* DROPDOWN REDONDO (Baseado no seu print) */}
                    {isOpen && (
                        <div className="mobile-dropdown">
                            <ul>
                                <li><a href="#sobre-mim" onClick={() => setIsOpen(false)}>Sobre mim</a></li>
                                <li><a href="#servicos" onClick={() => setIsOpen(false)}>Serviços</a></li>
                                <li><a href="#projects" onClick={() => setIsOpen(false)}>Projetos</a></li>
                                <li className="mobile-contact-item">
                                    <a href="https://wa.me/..." onClick={() => setIsOpen(false)}>
                                        Entre em contato
                                        <img src={arrowUpRight} alt="" className="purple-arrow" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}