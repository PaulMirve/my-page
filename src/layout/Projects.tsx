import React from 'react'
import { useTranslation } from 'react-i18next'
import Project from '../components/Project/Project'
import Icons from '../enumerables/Icons'
import IProject from '../interfaces/Project'

const Projects = () => {
    const { t } = useTranslation();

    const projects: IProject[] = [
        {
            name: 'Pets',
            description: t("projects.pets"),
            img: 'https://picsum.photos/650/400?random=1',
            repo: '',
            live: 'https://pets-ad159.firebaseapp.com',
            stack: [Icons.typescript, Icons.react, Icons.redux, Icons.nodejs, Icons.express, Icons.mongo, Icons.sass]
        },
        {
            name: 'Creative Expo',
            description: t("projects.creative_expo"),
            img: 'https://picsum.photos/650/400?random=2',
            repo: '',
            live: 'https://creative-expo-80c56.web.app',
            stack: [Icons.javascript, Icons.react, Icons.sass]
        },
        {
            name: 'Penny',
            description: t("projects.penny"),
            img: 'https://picsum.photos/650/400?random=3',
            repo: '',
            live: 'https://penny-1f143.web.app',
            stack: [Icons.javascript, Icons.react, Icons.firebase, Icons.sass]
        },
        {
            name: "Japanese Project",
            description: t("projects.japanese_project"),
            img: 'https://picsum.photos/650/400?random=4',
            repo: '',
            live: '',
            stack: [Icons.javascript, Icons.react, Icons.materialui]
        }
    ]

    return (
        <section id="projects" className="projects">
            <h1 className="heading heading--primary tac mb-md">
                {t("projects.heading")}
            </h1>
            {
                projects.map((project, index) => {
                    return <Project key={index} orientation={index % 2 !== 0 ? "left" : "right"} {...project} />
                })
            }
        </section>
    )
}

export default Projects
