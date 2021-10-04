import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation();

    return (
        <header id="header" className="header">
            <span>
                <h1 className="heading heading--logo">Paul Miranda</h1>
                <p className="header__subtitle" dangerouslySetInnerHTML={{ __html: t("header.caption") }}></p>
            </span>
        </header>
    )
}

export default Header
