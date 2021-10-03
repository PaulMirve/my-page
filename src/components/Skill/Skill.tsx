import React from 'react'
import ISkill from '../../interfaces/Skill'
import Icon from '../Icon/Icon';


const Skill: React.FC<ISkill> = ({ icon, name }) => {
    return (
        <div className="skill">
            <Icon icon={icon} className="card__icon" />
            <p className="skill__name">{name}</p>
        </div>
    )
}

export default Skill
