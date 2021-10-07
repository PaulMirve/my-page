import React from 'react'
import { useTranslation } from 'react-i18next'
import Heading from '../components/Heading/Heading'
import Project from '../components/Project/Project'
import Icons from '../enumerables/Icons'
import IProject from '../interfaces/Project'

const Projects = () => {
    const { t } = useTranslation();

    const projects: IProject[] = [
        {
            name: 'Pets',
            description: t("projects.pets"),
            img: '../img/pages/pets-head.png',
            modalImg: '../img/pages/pets.png',
            repo: 'https://github.com/PaulMirve/pets-frontend',
            live: 'https://pets-ad159.firebaseapp.com',
            stack: [Icons.typescript, Icons.react, Icons.redux, Icons.nodejs, Icons.express, Icons.mongo, Icons.sass]
        },
        {
            name: 'Creative Expo',
            description: t("projects.creative_expo"),
            img: '../img/pages/creative-expo-head.png',
            modalImg: '../img/pages/creative-expo.png',
            repo: 'https://github.com/PaulMirve/creative-expo',
            live: 'https://creative-expo-80c56.web.app',
            stack: [Icons.javascript, Icons.react, Icons.sass]
        },
        {
            name: 'Penny',
            description: t("projects.penny"),
            img: '../img/pages/penny-head.png',
            modalImg: '../img/pages/penny.png',
            repo: 'https://github.com/PaulMirve/penny',
            live: 'https://penny-1f143.web.app',
            stack: [Icons.javascript, Icons.react, Icons.firebase, Icons.sass]
        },
        {
            name: "Japanese Project",
            description: t("projects.japanese_project"),
            img: '../img/pages/japanese-project-head.png',
            modalImg: '../img/pages/japanese-project.png',
            repo: 'https://github.com/PaulMirve/japanese-project',
            live: 'https://japanese-project-247fe.firebaseapp.com',
            stack: [Icons.javascript, Icons.react, Icons.materialui]
        }
    ]

    return (
        <section id="projects" className="projects">
            <Heading aligned className="mb-md">
                {t("projects.heading")}
            </Heading>
            {
                projects.map((project, index) => {
                    return <Project key={index} orientation={index % 2 !== 0 ? "left" : "right"} {...project} />
                })
            }
        </section>
    )
}

export default Projects
