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

const IMAGE_SIZE = 300;

const projects: Project[] = [
  {
    name: "Test title",
    technologies: ["Typescript", "Sass", "React"],
    description:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    live: "/",
    repo: "/",
  },
  {
    name: "Test title",
    technologies: ["Typescript", "Sass", "React"],
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    live: "/",
    repo: "/",
  },
];

const Home = () => {
  const { push } = useRouter();
  const { theme } = useTheme();

  return (
    <div style={{ scrollBehavior: "smooth", paddingBottom: 400 }}>
      <Head>
        <title>Paul Miranda | Software Developer</title>
      </Head>
      <Typography style={{ paddingTop: 100 }} variant="bigTitle">
        Paul Miranda
      </Typography>
      <Typography>
        As a front-end developer, I have a passion for creating intuitive and
        visually appealing websites that deliver an exceptional user experience.
        My expertise with Typescript allows me to turn designs into dynamic and
        interactive digital creations. I am dedicated to staying up-to-date with
        the latest industry trends and technologies to ensure my clients
        websites are always at the forefront of innovation.
      </Typography>
      <Button
        style={{ marginTop: 20 }}
        onClick={() => {
          push("/CV.pdf");
        }}
        className={styles.heroButton}>
        Download CV
      </Button>
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
            science and developed a great interest for it. I started learning C
            language and later learnt Java on college. I love researching and
            practicing with multiple programming languages and making apps that
            solves some of the necessities I have everyday. I enjoy a lot
            working with Typescript so I have focused my career on this
            language.
            <Typography>
              I also have a very deep interest in UX/UI design. I try to learn
              as much as I can about this topic and practice it designing my own
              designs (Some of the projects mentioned in the
              &quot;Projects&quot; section are designed by me!).
            </Typography>
            <Typography>
              Another of my hobbies are reading books and playing guitar.
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
            options={[
              {
                index: 1,
                label: "Genemod",
                points: [
                  "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
                  "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
                ],
              },
              {
                index: 2,
                label: "Spark Technologies",
                points: ["BBBBBBBBBBBBBBBBBBBBB"],
              },
              {
                index: 3,
                label: "Application Software",
                points: ["CCCCCCCCCCCCCC"],
              },
            ]}
          />
        </div>
      </Section>
      <Section style={{ marginTop: 300 }}>
        <SectionTitle id="projects" number={3}>
          Projects
        </SectionTitle>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
