import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import HorizontalMenu from '../components/HorizontalMenu/HorizontalMenu'
import Job from '../components/Job/Job'
import IJob from '../interfaces/Job'


const Jobs = () => {
    const { t } = useTranslation();
    const [selectedJob, setSelectedJob] = useState<number>(0);

    const jobs: IJob[] = [
        {
            name: 'Software Developer',
            tasks: [
                t("jobs.spark_techs.point-1"),
                t("jobs.spark_techs.point-2"),
                t("jobs.spark_techs.point-3"),
            ]
        },
        {
            name: 'Software Developer',
            tasks: [
                t("jobs.application_software.point-1"),
                t("jobs.application_software.point-2"),
            ]
        },
    ]

    return (
        <section id="jobs" className="jobs">
            <h1 className="heading heading--primary tac mb-md">Places where I've worked</h1>

            <div className="jobs__layout">
                <HorizontalMenu jobs={jobs.map(job => job.name)} onChange={(index) => setSelectedJob(index)} />
                {
                    < Job {...jobs[selectedJob]} />
                }
            </div>

        </section>
    )
}

export default Jobs
