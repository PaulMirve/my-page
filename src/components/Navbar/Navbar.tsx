import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Icons from '../../enumerables/Icons';
import Icon from '../Icon/Icon';
import Menu from '../Menu/Menu';

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const onLanguageChange = () => {
        const getCookie = (name: string): string | null => {
            const nameLenPlus = (name.length + 1);
            return document.cookie
                .split(';')
                .map(c => c.trim())
                .filter(cookie => {
                    return cookie.substring(0, nameLenPlus) === `${name}=`;
                })
                .map(cookie => {
                    return decodeURIComponent(cookie.substring(nameLenPlus));
                })[0] || null;
        }

        if (getCookie("i18next") === "es") {
            document.cookie = "i18next=en;"
        } else {
            document.cookie = "i18next=es;"
        }
        window.location.reload();
    }
    return (
        <div className="navbar">
            <button onClick={onLanguageChange} className="navbar__button"><Icon icon={Icons.language} /></button>
            <div className="navbar__links">
                <a href="#header" className="navbar__link">{t("navbar.about_me")}</a>
                <a href="#skills" className="navbar__link">{t("navbar.skills")}</a>
                <a href="#projects" className="navbar__link">{t("navbar.projects")}</a>
                <a href="#jobs" className="navbar__link">{t("navbar.jobs")}</a>
                <a href="#socials" className="navbar__link">{t("navbar.socials")}</a>
                <a href="#resources" className="navbar__link">{t("navbar.resources")}</a>
            </div>
            <button onClick={() => setMenuOpen(true)} className="navbar__menu">
                <div></div>
            </button>
            <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
                <a onClick={() => setMenuOpen(false)} href="#header" className="navbar__link">{t("navbar.about_me")}</a>
                <a onClick={() => setMenuOpen(false)} href="#skills" className="navbar__link">{t("navbar.skills")}</a>
                <a onClick={() => setMenuOpen(false)} href="#projects" className="navbar__link">{t("navbar.projects")}</a>
                <a onClick={() => setMenuOpen(false)} href="#jobs" className="navbar__link">{t("navbar.jobs")}</a>
                <a onClick={() => setMenuOpen(false)} href="#socials" className="navbar__link">{t("navbar.socials")}</a>
                <a onClick={() => setMenuOpen(false)} href="#resources" className="navbar__link">{t("navbar.resources")}</a>
            </Menu>
        </div>
    )
}

export default Navbar
