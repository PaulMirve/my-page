import React from "react";
import styles from "@sass/components/project-card.module.scss";
import Typography from "./Typography";
import Image from "next/image";
import { Project } from "@_types/Project";
import Button from "./Button";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const { name, technologies, description } = project;

  return (
    <div className={styles.card}>
      <div className={styles.photos}>
        <div className={styles.frame}>
          <Image
            src="https://picsum.photos/500/500?1"
            alt="Project"
            width={300}
            height={300}
          />
        </div>
        <div className={styles.frame}>
          <Image
            src="https://picsum.photos/500/500?2"
            alt="Project"
            width={300}
            height={300}
          />
        </div>
        <div className={styles.frame}>
          <Image
            src="https://picsum.photos/500/500"
            alt="Project"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={styles.content}>
        <Typography variant="subtitle">{name}</Typography>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <Typography key={index} variant="caption">
              {tech}
            </Typography>
          ))}
        </div>
        <div className={styles.description}>
          <Typography>{description}</Typography>
        </div>
        <div className={styles.actions}>
          <Button variant="outlined" icon="code">
            See live
          </Button>
          <Button variant="outlined" icon="github-filled">
            Go to repo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
