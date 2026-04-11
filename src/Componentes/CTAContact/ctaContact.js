import "./ctaContact.css";
import { useTranslation } from "react-i18next";

export default function CTAContact() {
    const { t, i18n } = useTranslation();
    const wpMessage = i18n.language === 'en' ? "Hello,%20I%20am%20interested" : "Olá,%20tenho%20interesse";
    return (
        <div className="cta-contact">
            <h2>{t('ctaContact.title')}</h2>
            <h3>{t('ctaContact.subtitle')}</h3>
            <a href={`https://wa.me/5545998623546?text=${wpMessage}`} className="contact-button">{t('ctaContact.button')}</a>
        </div>
    )
}