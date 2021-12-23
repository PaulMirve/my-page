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
import Introduction from 'layout/Landing/Introduction';
import Jobs from 'layout/Landing/Jobs';
import { IJob } from 'interfaces/IJob';
import { getJobs } from '../firebase/jobs';
import Footer from 'layout/Landing/Footer';

interface Props {
  projects: IProject[],
  skills: ISkill[],
  jobs: IJob[]
}

const Home = ({ projects, skills, jobs }: Props) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Paul Miranda | Software Developer</title>
      </Head>
      <Header />
      <Introduction />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Jobs jobs={jobs} />
      <Footer/>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const projects = await getProjects();
  const skills = await getSkills();
  const jobs = await getJobs();
  return {
    props: {
      projects,
      skills,
      jobs
    }
  }
}


export default Home
