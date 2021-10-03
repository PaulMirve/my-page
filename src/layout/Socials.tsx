import React from 'react'
import Icon from '../components/Icon/Icon'
import Icons from '../enumerables/Icons'

interface Props {

}

const Socials = (props: Props) => {
    return (
        <section id="socials" className="socials">
            <h1 className="heading heading--primary tac">
                Where you can find me
            </h1>
            <div className="socials__icons">
                <a href="#"><Icon className="socials__icon" icon={Icons.github} /></a>
                <a href="#"> <Icon className="socials__icon" icon={Icons.linkedin} /></a>
                <a href="#"><Icon className="socials__icon" icon={Icons.codepen} /></a>
            </div>
        </section>
    )
}

export default Socials
