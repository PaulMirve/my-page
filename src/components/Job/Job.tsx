import React from 'react'
import { useTranslation } from 'react-i18next'
import Icons from '../../enumerables/Icons'
import IJob from '../../interfaces/Job'
import Icon from '../Icon/Icon'

const Job = ({ title, tasks, current, stack }: IJob) => {
    const { t } = useTranslation();
    return (
        <div className="job">
            <div className="job__title">{title} {current && <b>{t("jobs.current")}</b>}</div>
            <div className="job__stack">
                {
                    stack.map((icon, index) => {
                        return <Icon icon={icon} key={index} />
                    })
                }
            </div>
            <div className="job__activities">
                {
                    tasks.map((task, index) => {
                        return (
                            <div key={index}>
                                <Icon className="card__icon" icon={Icons.caret_forward} />
                                <p className="job__task">
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
