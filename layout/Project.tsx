import styles from "@sass/layout/project.module.scss";
import Button from "components/Button";
import ButtonLink from "components/ButtonLink";
import Typography from "components/Typography";
import Image from "next/image";

type ProjectType = {
  name: string;
  description: string;
  img: string;
  live: string;
  repo: string;
  technologies: string[];
};

type Props = {
  project: ProjectType;
};

const Project = ({ project }: Props) => {
  const { name, description, img, technologies, live, repo } = project;
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <Typography variant="heading">{name}</Typography>
        <Typography style={{ marginTop: 5, marginBottom: 5 }}>
          {description}
        </Typography>
        <div className={styles.techs}>
          {technologies.map((tech, index) => (
            <Typography variant="caption" color="dark-grey" key={index}>
              {tech}
            </Typography>
          ))}
        </div>
        <div className={styles.actions}>
          <ButtonLink href={repo} icon="github">
            See repo
          </ButtonLink>
          <ButtonLink href={live} icon="code">
            See live
          </ButtonLink>
        </div>
      </div>
      <Image
        className={styles.img}
        src={img}
        alt={name}
        width={430}
        height={330}
      />
    </div>
  );
};

export default Project;
