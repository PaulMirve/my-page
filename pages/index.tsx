import styles from '@sass/pages/landing.module.scss';
import IProject from 'interfaces/IProjects';
import Header from 'layout/Landing/Header';
import Projects from 'layout/Landing/Projects';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { getProjects } from '../firebase/projects';

interface Props {
  projects: IProject[]
}

const Home = ({ projects }: Props) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Paul Miranda | Software Developer</title>
      </Head>
      <Header />
      <Projects projects={projects} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const projects = await getProjects();
  return {
    props: {
      projects
    }
  }
}

export default Home
