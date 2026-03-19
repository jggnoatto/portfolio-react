import SectionTitle from "../SectionTitle/sectionTitle"
import gradient1 from "../../assets/gradient1.svg";
import "./aboutMe.css"

export default function AboutMe() {
    return (
         <div className="about-me-container">
            
            <section id="sobre-mim">
                <SectionTitle 
                    title = "Sobre Mim">
                </SectionTitle>
                <p>Sou João Gnoatto, sou UI/UX Designer e Desenvolvedor de Software. Atualmente cursando Engenharia de Software na FAG, transformo desafios complexos em interfaces <strong>modernas</strong> e <strong>eficientes</strong> Meu trabalho vai além da estética: foco no crescimento empresarial através de Design Systems escaláveis e interfaces de alta performance, como demonstram meus projetos em ecossistemas bancários e comerciais.  </p>
            </section>
        </div>
    )
}