import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../SectionTitle/sectionTitle";
import "./servicesSection.css";

// Importe suas imagens
import imgDesktop from "../../assets/projeto-cresol-image-1.png";
import imgMobile1 from "../../assets/interface-mobile1.png";
import imgMobile2 from "../../assets/interface-mobile2.png";
import imgMobile3 from "../../assets/interface-mobile3.png";
import landingPage from "../../assets/landing-page-carousel.png";
import webSystem from "../../assets/sistemas-web-carousel.png";

// Movemos o array services para dentro do componente para podermos usar o hook useTranslation
// ou criamos um componente/função que retorne a array com traduções
const getServices = (t) => [
  { id: 1, title: t('services.items.modern_interfaces'), images: [imgDesktop], type: "desktop" },
  { id: 2, title: t('services.items.mobile_interfaces'), images: [imgMobile1, imgMobile2, imgMobile3], type: "mobile" },
  { id: 3, title: t('services.items.web_systems'), images: [webSystem], type: "desktop" },
  { id: 4, title: t('services.items.landing_pages'), images: [landingPage], type: "desktop" },
];

export default function ServicesSection() {
  const { t } = useTranslation();
  const services = getServices(t);
  const [hoveredId, setHoveredId] = useState(null);

  // Fecha o card ao clicar fora no mobile
  useEffect(() => {
    const handleClickOutside = () => {
      if (window.innerWidth <= 768) setHoveredId(null);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleItemClick = (e, id) => {
    e.stopPropagation();
    if (window.innerWidth <= 768) {
      setHoveredId(hoveredId === id ? null : id);
    }
  };

  return (
    <div className="services-section-container">
      <section id="servicos">
        <SectionTitle title={t('services.title')} />
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-item"
              onMouseEnter={() => window.innerWidth > 768 && setHoveredId(service.id)}
              onMouseLeave={() => window.innerWidth > 768 && setHoveredId(null)}
              onClick={(e) => handleItemClick(e, service.id)}
            >
              <div className="service-title-wrapper">
                <h3 className="service-text">{service.title}</h3>
                <span className="info-icon">i</span>
              </div>

              <AnimatePresence>
                {hoveredId === service.id && (
                  <motion.div 
                    className="hover-card"
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="card-header">
                      <span>→</span> {service.title}
                    </div>

                    <div className={`images-wrapper ${service.type}-layout`}>
                      {service.images.map((img, index) => (
                        <div key={index} className="image-frame">
                          <img src={img} alt={service.title} />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}