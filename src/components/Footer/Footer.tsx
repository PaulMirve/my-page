import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="footer__code" dangerouslySetInnerHTML={{ __html: t("footer.code") }}></div>
        </footer>
    )
}

export default Footer
