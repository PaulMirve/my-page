import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <a href="#header" className="navbar__link">About me</a>
                <a href="#skills" className="navbar__link">Skills</a>
                <a href="#projects" className="navbar__link">Projects</a>
                <a href="#jobs" className="navbar__link">Jobs</a>
                <a href="#socials" className="navbar__link">Socials</a>
                <a href="#resources" className="navbar__link">Resources</a>
            </div>
        </div>
    )
}

export default Navbar
