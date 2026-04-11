import heroImage from '../../assets/imagem-joao.png'
import { useTranslation } from 'react-i18next';
import "./hero.css"

export default function Hero() {
    const { t } = useTranslation();
    return (
        <div className="hero-container">
            <section id="hero">
                    <h1>{t('hero.title1')}<br/><span className="bold">{t('hero.title2')}</span>{t('hero.title3')}<strong className="bold">{t('hero.title4')}</strong> <br/>{t('hero.title5')}<span className="bold">{t('hero.title6')}</span>{t('hero.title7')}<strong>{t('hero.punctuation')}</strong></h1>
                    <p className="hero-subtitle" dangerouslySetInnerHTML={{ __html: t('hero.subtitleHtml') }}></p>
                    <a href="#projects">
                        <button>{t('hero.viewProjects')}</button>
                    </a>
                    
            </section>
            <img src={heroImage} alt="Imagem de destaque" className="hero-image"></img>
        </div>
        
    )
}