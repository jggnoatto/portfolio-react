import Header from "../Header/header";
import "./projectPage.css";

export default function ProjectPage() {
    return (
        <div className="project-page">
            <Header />
            <main>
                <div className="project-content">
                    <h1>Detalhes do Projeto</h1>
                    <p>Aqui você pode adicionar detalhes específicos sobre o projeto selecionado, como tecnologias usadas, desafios enfrentados e soluções implementadas.</p>
                </div>
            </main>
        </div>
    )
}