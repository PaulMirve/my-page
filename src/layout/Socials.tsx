import React from 'react'
import { useTranslation } from 'react-i18next'
import Heading from '../components/Heading/Heading'
import Icon from '../components/Icon/Icon'
import Icons from '../enumerables/Icons'


const Socials = () => {
    const { t } = useTranslation();
    return (
        <section id="socials" className="socials">
            <Heading aligned>
                {t("socials.heading")}
            </Heading>
            <div className="socials__icons">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/PaulMirve">
                    <Icon className="socials__icon" icon={Icons.github} />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/paulmirve/">
                    <Icon className="socials__icon" icon={Icons.linkedin} />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codepen.io/paulmirve">
                    <Icon className="socials__icon" icon={Icons.codepen} />
                </a>
            </div>
        </section>
    )
}

export default Socials
