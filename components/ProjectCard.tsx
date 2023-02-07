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
  const { name, technologies, description, images, live, repo } = project;

  return (
    <div className={styles.card}>
      <div className={styles.photos}>
        {images.map((url, index) => (
          <div className={styles.frame} key={index}>
            <Image
              className={styles.img}
              src={url}
              alt="Project"
              width={300}
              height={180}
            />
          </div>
        ))}
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
          <Button
            variant="outlined"
            icon="code"
            onClick={() => window.open(live, "_blank")?.focus()}>
            See live
          </Button>
          <Button
            variant="outlined"
            icon="github-filled"
            onClick={() => window.open(repo, "_blank")?.focus()}>
            Go to repo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
