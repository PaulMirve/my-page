import Project from "components/Project"
import IProject from "interfaces/IProjects"
import styles from '@sass/layout/landing/projects.module.scss';

interface Props {
    projects: IProject[]
}

function Projects({ projects }: Props) {
    return (
        <section id="projects" className={styles.projects}>
            {
                projects.map((project, index) => (
                    <Project key={index} orientation="left" {...project} />
                ))
            }
        </section>
    )
}

export default Projects
