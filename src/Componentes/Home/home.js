import Header from "../Header/header";
import Hero from "../Hero/hero";
import AboutMe from "../AboutMe/aboutMe";
import ServicesSection from "../ServicesSection/servicesSection";
import ProjectsSection from "../ProjectsSection/projectsSection";
import CTAContact from "../CTAContact/ctaContact";
import ScrollReveal from "../ScrollReveal/scrollReveal";
import { useTranslation } from "react-i18next";
import "./home.css"

export default function Home() {
    const { t } = useTranslation();
    return (

        <div className="home">
           
                <div className="side-line"></div>
                    <div className="scroll-indicator">
                    <p>{t('home.scrollDown')}</p>
                    <span className="scroll-arrow">↓</span>
                </div>
            
            


            <Header />
            <main>
                <div className="home-content">
                    <ScrollReveal>
                        <Hero />
                    </ScrollReveal>

                    <ScrollReveal>
                        <AboutMe />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <ServicesSection />
                    </ScrollReveal>

                    <ScrollReveal>
                        <ProjectsSection />
                    </ScrollReveal>

                    <ScrollReveal>
                        <CTAContact />
                    </ScrollReveal>
                  
                    
                </div>
            </main>
        </div>
    )
}