import React from 'react'
import ICard from '../../interfaces/Card'


const Card: React.FC<ICard> = ({ description, heading, title, buttonText, buttonAction }) => {
    return (
        <div className="card">
            <div className="card__heading">
                <h3>{heading}</h3>
            </div>
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <p>
                    {description}
                </p>
                {buttonText && <button onClick={buttonAction} className="btn btn--small btn--black">{buttonText}</button>}
            </div>
        </div>
    )
}

export default Card
