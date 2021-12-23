import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from '@sass/components/navbar.module.scss';

const Navbar = () => {
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
        <div className={styles.navbar}>
            <button onClick={onLanguageChange} className={styles.button}>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Language</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 112h288M192 64v48M272 448l96-224 96 224M301.5 384h133M281.3 112S257 206 199 277 80 384 80 384" /><path d="M256 336s-35-27-72-75-56-85-56-85" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
            </button>
            <div className={styles.links}>
                <a href="#header" className={styles.link}>{t("navbar.about_me")}</a>
                <a href="#skills" className={styles.link}>{t("navbar.skills")}</a>
                <a href="#projects" className={styles.link}>{t("navbar.projects")}</a>
                <a href="#jobs" className={styles.link}>{t("navbar.jobs")}</a>
            </div>
        </div>
    )
}

export default Navbar
