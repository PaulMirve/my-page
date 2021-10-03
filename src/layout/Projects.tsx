import React from 'react'
import Project from '../components/Project/Project'
import Icons from '../enumerables/Icons'
import IProject from '../interfaces/Project'

const projects: IProject[] = [
    {
        name: 'Pets',
        description: ``,
        img: 'https://picsum.photos/650/400?random=1',
        repo: '',
        live: '',
        stack: [Icons.typescript, Icons.react, Icons.redux, Icons.nodejs, Icons.express, Icons.mongo, Icons.sass]
    },
    {
        name: 'Creative Expo',
        description: ``,
        img: 'https://picsum.photos/650/400?random=2',
        repo: '',
        live: '',
        stack: [Icons.javascript, Icons.react, Icons.sass]
    },
    {
        name: 'Penny',
        description: ``,
        img: 'https://picsum.photos/650/400?random=3',
        repo: '',
        live: '',
        stack: [Icons.javascript, Icons.react, Icons.sass]
    },
]

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h1 className="heading heading--primary tac mb-md">
                My personal projects
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
