import React from 'react'
import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import CardSmall from '../components/Card/CardSmall';
import Icons from '../enumerables/Icons';
import ICard from '../interfaces/Card';
import ISmallCard from '../interfaces/SmallCard';

const Introduction = () => {
    const { t } = useTranslation();

    const card: ICard = {
        heading: 'Frontend Developer',
        title: t("introduction.about_me.tag"),
        description: t("introduction.about_me.description")
    };

    const widgets: ISmallCard[] = [
        {
            icon: Icons.code,
            description: t("introduction.widget-1")
        },
        {
            icon: Icons.database,
            description: t("introduction.widget-2")
        },
        {
            icon: Icons.desktop_tower,
            description: t("introduction.widget-3")
        },
        {
            icon: Icons.browser,
            description: t("introduction.widget-4")
        },
    ];
    return (
        <section id="introduction" className="introduction">
            <div className="introduction__me">
                <Card {...card} />
                <img src="../img/me.jpg" alt="Me" />
            </div>

            <div className="introduction__grid">
                {
                    widgets.map((widget, index) => {
                        return <CardSmall key={index} {...widget} />
                    })
                }
            </div>
            {/* <div className="introduction__me">
              
                <img src="../img/me.jpg" alt="Me" />
            </div>

            <div className="introduction__grid">
                {
                    widgets.map((widget, index) => {
                        return <CardSmall key={index} {...widget} />
                    })
                }
            </div> */}
        </section>
    )
}

export default Introduction
