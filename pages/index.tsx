import type { NextPage } from 'next'
import styles from '@sass/pages/landing.module.scss';
import Heading from '../components/Heading';
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Paul Miranda | Software Developer</title>
      </Head>
      <Heading>
        Landing Page
      </Heading>
      <hr />
    </div>
  )
}

export default Home
