import heroImage from '../../assets/imagem-joao.png'
import "./hero.css"

export default function Hero() {
    return (
        <div className="hero-container">
            <section id="hero">
                    <h1>Projetando interfaces <br/><span className="bold">modernas</span> que <strong className="bold">impulsionam</strong> <br/>o <span className="bold">crescimento</span> do seu <br/>negócio<strong>.</strong></h1>
                    <p className="hero-subtitle">Especialista na criação de interfaces de <strong className="non-bold">alta performance</strong> que conectam sua marca 
                    ao público e transformam a presença digital da sua empresa em <strong className="non-bold">resultados reais</strong>.</p>
                    <a href="#projects">
                        <button>Ver Projetos</button>
                    </a>
                    
            </section>
            <img src={heroImage} alt="Imagem de destaque" className="hero-image"></img>
        </div>
        
    )
}