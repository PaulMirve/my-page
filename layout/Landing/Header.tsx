import styles from '@sass/layout/landing/header.module.scss';
import Heading from 'components/Heading';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className={styles.main}>
            <span>
                <Heading className={styles.heading}>
                    Paul Miranda
                </Heading>
                <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: t("header.caption") }}></p>
            </span>
        </header>
    )
}

export default Header
