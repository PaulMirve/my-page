import React from 'react'
import Card from '../components/Card/Card';
import CardSmall from '../components/Card/CardSmall';
import Icons from '../enumerables/Icons';
import ICard from '../interfaces/Card';
import ISmallCard from '../interfaces/SmallCard';

const card: ICard = {
    heading: 'Frontend Developer',
    title: 'About me',
    description: `Hi! I'm Paul Miranda, a software developer with passion for the frontend. Throughout my career I have worked in a lot of web and 
        dekstop apps, but I have found that I love the is work with frontend techonologies like React. Also I love the CSS.`
};

const widgets: ISmallCard[] = [
    {
        icon: Icons.code,
        description: `Worked in a lot web application, client and server side.`
    },
    {
        icon: Icons.database,
        description: `Worked with backend techologies and multiple databases engines.`
    },
    {
        icon: Icons.desktop_tower,
        description: `  Experienced in building large scale desktop applications.`
    },
    {
        icon: Icons.browser,
        description: `Builded and designed attractive and responsive websites.`
    },
];

const Introduction = () => {
    return (
        <section id="introduction" className="introduction">
            <Card {...card} />
            <div className="introduction__grid">
                {
                    widgets.map((widget, index) => {
                        return <CardSmall key={index} {...widget} />
                    })
                }
            </div>
        </section>
    )
}

export default Introduction
