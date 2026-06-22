import "./ctaContact.css";
import { useTranslation } from "react-i18next";

export default function CTAContact() {
    const { t, i18n } = useTranslation();
    const wpMessage = i18n.language === 'en' ? "Hello,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20%20to%20discuss%20a%potential%20opportunity%20with%20you." : "Olá,%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar.";
    return (
        <div className="cta-contact">
            <h2>{t('ctaContact.title')}</h2>
            <h3>{t('ctaContact.subtitle')}</h3>
            <a href={`https://wa.me/5545998623546?text=${wpMessage}`} className="contact-button">{t('ctaContact.button')}</a>
        </div>
    )
}