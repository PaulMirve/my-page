import styles from '@sass/pages/landing.module.scss';
import { getSkills } from '../firebase/skills';
import IProject from 'interfaces/IProjects';
import { ISkill } from 'interfaces/ISkill';
import Header from 'layout/Landing/Header';
import Projects from 'layout/Landing/Projects';
import Skills from 'layout/Landing/Skills';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { getProjects } from '../firebase/projects';

interface Props {
  projects: IProject[],
  skills: ISkill[]
}

const Home = ({ projects, skills }: Props) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Paul Miranda | Software Developer</title>
      </Head>
      <Header />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const projects = await getProjects();
  const skills = await getSkills();
  return {
    props: {
      projects,
      skills
    }
  }
}


export default Home
