import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from './Header'
import Introduction from './Introduction'
import Jobs from './Jobs'
import Projects from './Projects'
import Skills from './Skills'
import Socials from './Socials'

interface Props {

}

const Landing: React.FC<Props> = () => {
    return (
        <>
            <Header />
            <main>
                <Introduction />
                <Skills />
                <Projects />
                <Jobs />
                <Socials />
            </main>
            <Footer />
        </>
    )
}

export default Landing
