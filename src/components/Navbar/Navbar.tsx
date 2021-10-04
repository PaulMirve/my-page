import React from 'react'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="navbar">
            <div className="navbar__links">
                <a href="#header" className="navbar__link">{t("navbar.about_me")}</a>
                <a href="#skills" className="navbar__link">{t("navbar.skills")}</a>
                <a href="#projects" className="navbar__link">{t("navbar.projects")}</a>
                <a href="#jobs" className="navbar__link">{t("navbar.jobs")}</a>
                <a href="#socials" className="navbar__link">{t("navbar.socials")}</a>
                <a href="#resources" className="navbar__link">{t("navbar.resources")}</a>
            </div>
        </div>
    )
}

export default Navbar
