import Header from "../Header/header";
import Hero from "../Hero/hero";
import AboutMe from "../AboutMe/aboutMe";
import ServicesSection from "../ServicesSection/servicesSection";
import ProjectsSection from "../ProjectsSection/projectsSection";
import CTAContact from "../CTAContact/ctaContact";
import ScrollReveal from "../ScrollReveal/scrollReveal";
import "./home.css"

export default function Home() {
    return (

        <div className="home">
            <ScrollReveal>
                <div className="side-line"></div>
                    <div className="scroll-indicator">
                    <p>ROLE PARA BAIXO</p>
                    <span className="scroll-arrow">↓</span>
                </div>
            </ScrollReveal>
            


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