import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importante para as rotas funcionarem
import { useTranslation } from "react-i18next";
import "./header.css";
import arrowUpRight from "../../assets/arrow-up-right.png";

const SunIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

const MoonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);
export default function Header() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    
    // Estado do tema com checagem inicial no localStorage
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <header>
            <nav className="navbar">
                <Link className="logo" to="/">João Gnoatto</Link>
                
                {/* --- DESKTOP MENU --- */}
                <ul className="nav-links desktop-only">
                    <li><a href="#sobre-mim">{t('header.about')}</a></li>
                    <li><a href="#servicos">{t('header.services')}</a></li>
                    <li><a href="#projects">{t('header.projects')}</a></li>
                </ul>

                <div className="header-actions desktop-only">
                    <div className="language-switcher">
                        <button className={i18n.language === 'pt' ? 'active' : ''} onClick={() => i18n.changeLanguage('pt')}>PT</button>
                        <span>|</span>
                        <button className={i18n.language === 'en' ? 'active' : ''} onClick={() => i18n.changeLanguage('en')}>EN</button>
                    </div>

                    <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle Dark Mode">
                        {isDarkMode ? <SunIcon /> : <MoonIcon />}
                    </button>
                    
                    <a className="contact" href="https://wa.me/...">
                        {t('header.contact')}
                        <img src={arrowUpRight} alt="Seta" />
                    </a>
                </div>

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
                                <li>
                                    <div className="language-switcher-mobile">
                                        <button className={i18n.language === 'pt' ? 'active' : ''} onClick={() => { i18n.changeLanguage('pt'); setIsOpen(false); }}>PT</button>
                                        <span>|</span>
                                        <button className={i18n.language === 'en' ? 'active' : ''} onClick={() => { i18n.changeLanguage('en'); setIsOpen(false); }}>EN</button>
                                        
                                        <span className="separator">|</span>
                                        <button className="theme-toggle-mobile" onClick={() => { setIsDarkMode(!isDarkMode); setIsOpen(false); }}>
                                            {isDarkMode ? <SunIcon /> : <MoonIcon />}
                                        </button>
                                    </div>
                                </li>
                                <li><a href="#sobre-mim" onClick={() => setIsOpen(false)}>{t('header.about')}</a></li>
                                <li><a href="#servicos" onClick={() => setIsOpen(false)}>{t('header.services')}</a></li>
                                <li><a href="#projects" onClick={() => setIsOpen(false)}>{t('header.projects')}</a></li>
                                <li className="mobile-contact-item">
                                    <a href="https://wa.me/..." onClick={() => setIsOpen(false)}>
                                        {t('header.contact')}
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