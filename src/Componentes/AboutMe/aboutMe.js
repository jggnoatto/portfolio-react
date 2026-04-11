import SectionTitle from "../SectionTitle/sectionTitle"
import { useTranslation } from "react-i18next"

import "./aboutMe.css"

export default function AboutMe() {
    const { t } = useTranslation();
    return (
         <div className="about-me-container">
            
            <section id="sobre-mim">
                <SectionTitle 
                    title = {t('aboutMe.title')}>
                </SectionTitle>
                <p dangerouslySetInnerHTML={{ __html: t('aboutMe.descriptionHtml') }}></p>
            </section>
        </div>
    )
}