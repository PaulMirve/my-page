import React from 'react'
import { useTranslation } from 'react-i18next'
import Heading from '../components/Heading/Heading'
import Skill from '../components/Skill/Skill'
import Icons from '../enumerables/Icons'
import ISkill from '../interfaces/Skill'

const skills: ISkill[] = [
    {
        icon: Icons.typescript,
        name: 'Typescript'
    },
    {
        icon: Icons.javascript,
        name: 'Javascript'
    },
    {
        icon: Icons.react,
        name: 'React'
    },
    {
        icon: Icons.redux,
        name: 'Redux'
    },
    {
        icon: Icons.css,
        name: 'CSS'
    },
    {
        icon: Icons.sass,
        name: 'SASS'
    },
    {
        icon: Icons.materialui,
        name: 'Material UI'
    },
    {
        icon: Icons.bootstrap,
        name: 'Bootstrap'
    },
    {
        icon: Icons.nodejs,
        name: 'NodeJS'
    },
    {
        icon: Icons.express,
        name: 'Express'
    },
    {
        icon: Icons.csharp,
        name: 'C#'
    },
    {
        icon: Icons.java,
        name: 'Java'
    },
    {
        icon: Icons.springboot,
        name: 'Springboot'
    },
    {
        icon: Icons.mongo,
        name: 'MongoDB'
    },
    {
        icon: Icons.git,
        name: 'Git'
    }
]

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className="skills">
            <Heading aligned className="mb-md">
                {t("skills.heading")}
            </Heading>
            <div className="skills__grid">
                {
                    skills.map((skill, index) => {
                        return <Skill key={index} {...skill} />
                    })
                }
            </div>
        </section>
    )
}

export default Skills
