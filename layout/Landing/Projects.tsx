import Project from "components/Project"
import IProject from "interfaces/IProjects"

interface Props {
    projects: IProject[]
}

function Projects({ projects }: Props) {
    return (
        <section>
            {
                projects.map((project, index) => (
                    <Project key={index} orientation="left" {...project} />
                ))
            }
        </section>
    )
}

export default Projects
