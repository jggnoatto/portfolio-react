import { useParams, Link } from "react-router-dom";
import { projectsData } from "./projectData";
import SectionTitle from "../SectionTitle/sectionTitle";
import ScrollReveal from "../ScrollReveal/scrollReveal";
import CTAContact from "../CTAContact/ctaContact";
import Header from "../Header/header";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import chevronLeft from "../../assets/chevron-left (1).svg";
import chevronRight from "../../assets/chevron-right.svg";
import arrowBack from "../../assets/arrow-return-left 1.png";
import "./projectPage.css";

export default function ProjectPage() {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);
    
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <main className="project-page-container">
                <h1>Projeto não encontrado</h1>
                <Link to="/" className="back-link">Voltar para Home</Link>
            </main>
        );
    }

    const nextImg = () => {
        setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImg = () => {
        setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="project-page">

            <Header />
            <main className="project-page-container">

                <ScrollReveal>
                    <section className="project-header">
                        <h1 className="project-title">{project.title}</h1>
                        <img src={project.logo} alt="Logo" className="project-logo" />
                    </section>
                </ScrollReveal>

                <ScrollReveal>
                    <section className="project-about">
                        <SectionTitle title="Sobre o Projeto" />
                        <p className="project-description">{project.description}</p>
                    </section>
                </ScrollReveal>
                
                
                <ScrollReveal>
                    <section className="project-gallery-carousel">
    <SectionTitle title="Principais telas" />
    
    <div className="carousel-wrapper">
    
        <button className="nav-arrow desktop-only" onClick={prevImg}>
            <img src={chevronLeft} alt="Anterior" />
        </button>

        <div className="projects-display">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImgIndex}
                    className="project-card"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="card-image-box">
                        <img 
                            src={project.images[currentImgIndex]} 
                            alt={`Screenshot ${currentImgIndex}`} 
                        />
                    </div>
                </motion.div>
            </AnimatePresence>


            <div className="carousel-dots desktop-only">
                {project.images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentImgIndex ? "active" : ""}`}
                        onClick={() => setCurrentImgIndex(index)}
                    />
                ))}
            </div>
        </div>

  
        <button className="nav-arrow desktop-only" onClick={nextImg}>
            <img src={chevronRight} alt="Próximo" />
        </button>


        <div className="mobile-controls-wrapper mobile-only">
            <button className="nav-arrow" onClick={prevImg}>
                <img src={chevronLeft} alt="Anterior" />
            </button>
            
            <div className="carousel-dots">
                {project.images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentImgIndex ? "active" : ""}`}
                        onClick={() => setCurrentImgIndex(index)}
                    />
                ))}
            </div>

            <button className="nav-arrow" onClick={nextImg}>
                <img src={chevronRight} alt="Próximo" />
            </button>
        </div>
    </div>
</section>
                </ScrollReveal> 

                <ScrollReveal>
                    <CTAContact />
                </ScrollReveal>
                
                <ScrollReveal>
                    <Link to="/" className="back-link">
                        Voltar para Home
                        <img src={arrowBack} alt="Voltar" />
                    </Link>
                </ScrollReveal>
                
            </main>
        </div>
    );
}