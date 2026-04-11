import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../SectionTitle/sectionTitle";
import chevronLeft from "../../assets/chevron-left (1).svg";
import chevronRight from "../../assets/chevron-right.svg";
import { Link } from "react-router-dom";
import "./projectsSection.css";

// Importes das imagens
import imgPrecoCerto from "../../assets/preco-certo-certo.png";
import imgMetalbak from "../../assets/metalbank-capa.png";
import imgLandingMetalBank from "../../assets/landing-page-metalbank-capa.png";

const getProjects = (t) => [
  { id: "preco-certo", title: "PREÇO CERTO", img: imgPrecoCerto, status: t('projectsSec.viewProject') },
  { id: "metalbank", title: "METALBANK", img: imgMetalbak, status: t('projectsSec.viewProject') },
  { id: "landing-page-metalbank", title: "LANDING PAGE - METALBANK", img: imgLandingMetalBank, status: t('projectsSec.viewProject') },
];

export default function ProjectsSection() {
  const { t } = useTranslation();
  const projects = getProjects(t);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-container">
      <SectionTitle title={t('projectsSec.title')} />

      <div className="carousel-wrapper">
        
        {/* --- VERSÃO DESKTOP --- */}
        {/* Setas nas laterais */}
        <button className="nav-arrow desktop-only prev-arrow" onClick={prevProject}> <img src={chevronLeft} alt="Anterior" /> </button>

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
                <Link to={`/project/${projects[currentIndex].id}`} className="project-btn">
                  {projects[currentIndex].status}
                </Link>
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

        <button className="nav-arrow desktop-only next-arrow" onClick={nextProject}> <img src={chevronRight} alt="Próximo" /> </button>


        {/* --- VERSÃO MOBILE --- */}
        {/* Tudo agrupado em uma linha abaixo do card */}
        <div className="mobile-controls-wrapper mobile-only">
            <button className="nav-arrow" onClick={prevProject}> <img src={chevronLeft} alt="Anterior" /> </button>
            
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <button className="nav-arrow" onClick={nextProject}> <img src={chevronRight} alt="Próximo" /> </button>
        </div>

      </div>
    </section>
  );
}