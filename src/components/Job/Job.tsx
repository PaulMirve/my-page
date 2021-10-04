import React from 'react'
import Icons from '../../enumerables/Icons'
import IJob from '../../interfaces/Job'
import Icon from '../Icon/Icon'

const Job = ({ name, tasks }: IJob) => {
    return (
        <div className="job">
            <div className="job__title">{name}</div>
            <div className="job__activities">
                {
                    tasks.map((task, index) => {
                        return (
                            <div key={index}>
                                <Icon className="card__icon" icon={Icons.caret_forward} />
                                <p>
                                    {task}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Job
