import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../SectionTitle/sectionTitle";
import "./projectsSection.css";

// Importes das imagens
import imgPrecoCerto from "../../assets/preco-certo-certo.png";
import imgMetalbak from "../../assets/metalbank-capa.png";
import imgLandingMetalBank from "../../assets/landing-page-metalbank-capa.png";

const projects = [
  { id: 1, title: "PREÇO CERTO", img: imgPrecoCerto, status: "Ver projeto →" },
  { id: 2, title: "METALBANK", img: imgMetalbak, status: "Ver projeto →" },
  { id: 3, title: "LANDING PAGE - METALBANK", img: imgLandingMetalBank, status: "Ver projeto →" },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-container">
      <SectionTitle title="Projetos" />

      <div className="carousel-wrapper">
        
        {/* --- VERSÃO DESKTOP --- */}
        {/* Setas nas laterais */}
        <button className="nav-arrow desktop-only prev-arrow" onClick={prevProject}> ‹ </button>

        <div className="projects-display">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="card-image-box">
                <img src={projects[currentIndex].img} alt={projects[currentIndex].title} />
              </div>
              
              <div className="card-footer">
                <span className="project-name">{projects[currentIndex].title}</span>
                <button className="project-btn">{projects[currentIndex].status}</button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pontos de navegação Desktop (Abaixo do card, dentro do display) */}
          <div className="carousel-dots desktop-only">
            {projects.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <button className="nav-arrow desktop-only next-arrow" onClick={nextProject}> › </button>


        {/* --- VERSÃO MOBILE --- */}
        {/* Tudo agrupado em uma linha abaixo do card */}
        <div className="mobile-controls-wrapper mobile-only">
            <button className="nav-arrow" onClick={prevProject}> ‹ </button>
            
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <button className="nav-arrow" onClick={nextProject}> › </button>
        </div>

      </div>
    </section>
  );
}