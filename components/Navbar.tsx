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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
            </button>
            <div className={styles.links}>
                <a href="#header" className={styles.link}>{t("navbar.about_me")}</a>
                <a href="#skills" className={styles.link}>{t("navbar.skills")}</a>
                <a href="#projects" className={styles.link}>{t("navbar.projects")}</a>
                <a href="#jobs" className={styles.link}>{t("navbar.jobs")}</a>
            </div>
            <button onClick={() => setMenuOpen(true)} className={styles.menu}>
                <div></div>
            </button>
            {/* <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
                <a onClick={() => setMenuOpen(false)} href="#header" className={styles.link}>{t("navbar.about_me")}</a>
                <a onClick={() => setMenuOpen(false)} href="#skills" className={styles.link}>{t("navbar.skills")}</a>
                <a onClick={() => setMenuOpen(false)} href="#projects" className={styles.link}>{t("navbar.projects")}</a>
                <a onClick={() => setMenuOpen(false)} href="#jobs" className={styles.link}>{t("navbar.jobs")}</a>
                <a onClick={() => setMenuOpen(false)} href="#socials" className={styles.link}>{t("navbar.socials")}</a>
                <a onClick={() => setMenuOpen(false)} href="#resources" className={styles.link}>{t("navbar.resources")}</a>
            </Menu> */}
        </div>
    )
}

export default Navbar
