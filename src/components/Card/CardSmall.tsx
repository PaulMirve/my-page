import React from 'react'
import ISmallCard from '../../interfaces/SmallCard';
import Icon from '../Icon/Icon';

const CardSmall: React.FC<ISmallCard> = ({ icon, description }) => {
    return (
        <div className="card card--small">
            <Icon icon={icon} className="card__icon" />
            {description}
        </div>

    )
}

export default CardSmall
