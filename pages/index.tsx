import Button from "components/Button";
import Typography from "components/Typography";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import ME from "public/me.png";
import styles from "@sass/pages/home.module.scss";
import SectionTitle from "@layout/SectionTitle";
import Menu from "components/Menu";
import Section from "@layout/Section";
import ProjectCard from "components/ProjectCard";
import { Project } from "@_types/Project";
import Head from "next/head";
import { useTheme } from "@hooks/useTheme";
import { getJobs, getProjects, getSkills } from "firebaseConfig/data";
import { GetStaticProps } from "next";
import { Job } from "@_types/Job";
import { Skill } from "@_types/Skill";
import Icon from "components/Icon";

const IMAGE_SIZE = 300;

type Props = {
  projects: Project[];
  jobs: Job[];
  skills: Skill[];
};

const Home = ({ projects, jobs, skills }: Props) => {
  const { push } = useRouter();
  const { theme } = useTheme();

  return (
    <div style={{ scrollBehavior: "smooth", paddingBottom: 400 }}>
      <Head>
        <title>Paul Miranda | Software Developer</title>
      </Head>
      <div className={styles.hero}>
        <div className={styles.socials}>
          <a
            href="https://linkedin.com/in/paulmirve"
            target="_blank"
            rel="noreferrer">
            <Icon name="linkedin" size={20} />
          </a>
          <a
            href="https://github.com/PaulMirve"
            target="_blank"
            rel="noreferrer">
            <Icon name="github-filled" size={20} />
          </a>
          <a
            href="https://codepen.io/paulmirve"
            target="_blank"
            rel="noreferrer">
            <Icon name="codepen" size={20} />
          </a>
        </div>
        <Typography variant="bigTitle">Paul Miranda</Typography>
        <Typography>
          As a frontend developer, I have a passion for creating intuitive and
          visually appealing websites that deliver an exceptional user
          experience. My expertise with Typescript allows me to turn designs
          into dynamic and interactive digital creations. I am dedicated to
          staying up-to-date with the latest industry trends and technologies to
          ensure my clients websites are always at the forefront of innovation.
        </Typography>
        <Button
          style={{ marginTop: 20 }}
          onClick={() => {
            push("/CV.pdf");
          }}
          className={styles.heroButton}>
          Download CV
        </Button>
      </div>
      <Section style={{ marginTop: 350 }}>
        <SectionTitle id="about" number={1}>
          About
        </SectionTitle>
        <div className={styles.about}>
          <Typography>
            Hi! I&apos;m Paul Miranda, a frontend software developer based in
            Mexico. I got interested in programming when I was in high school
            when I learnt how videogames are made. Since I was a child I enjoyed
            playing video games and later got interested on how they were
            created. Researching this topic is how I learnt about the computer
            science and developed a great interest for it. I love researching
            and practicing with multiple programming languages and making apps
            that solves some of the necessities I have everyday.
            <Typography>
              I also have a very deep interest in UX/UI design. I try to learn
              as much as I can about this topic and practice it designing my own
              designs (Some of the projects mentioned in the
              &quot;Projects&quot; section are designed by me!).
            </Typography>
            <Typography>
              Some of the technologies I have worked with are:
              <ul className={styles.skills}>
                {skills
                  .sort((a, b) => {
                    if (a.order < b.order) return -1;
                    if (a.order > b.order) return 1;
                    return 0;
                  })
                  .map(({ name }, index) => (
                    <li key={index}>
                      <Typography color="grey">{name}</Typography>
                    </li>
                  ))}
              </ul>
            </Typography>
          </Typography>
          <div
            style={{
              backgroundColor: theme === "dark" ? "var(--text)" : "transparent",
              borderRadius: "50%",
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
            }}>
            <Image width={IMAGE_SIZE} height={IMAGE_SIZE} src={ME} alt="me" />
          </div>
        </div>
      </Section>
      <Section style={{ marginTop: 200 }}>
        <SectionTitle id="experience" number={2}>
          Experience
        </SectionTitle>
        <div>
          <Menu
            style={{ marginTop: "5rem" }}
            options={jobs
              .sort((a, b) => {
                if (a.order < b.order) return -1;
                if (a.order > b.order) return 1;
                return 0;
              })
              .map((job, index) => ({
                index,
                job,
              }))}
          />
        </div>
      </Section>
      <Section style={{ marginTop: 300 }}>
        <SectionTitle id="projects" number={3}>
          Projects
        </SectionTitle>
        <div className={styles.projects}>
          {projects
            .sort((a, b) => {
              if (a.order < b.order) return -1;
              if (a.order > b.order) return 1;
              return 0;
            })
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getProjects();
  const jobs = await getJobs();
  const skills = await getSkills();
  return {
    props: {
      projects,
      jobs,
      skills,
    },
    revalidate: 86400,
  };
};
