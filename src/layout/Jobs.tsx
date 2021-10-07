import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Heading from '../components/Heading/Heading'
import HorizontalMenu from '../components/HorizontalMenu/HorizontalMenu'
import Job from '../components/Job/Job'
import Icons from '../enumerables/Icons'
import IJob from '../interfaces/Job'


const Jobs = () => {
    const { t } = useTranslation();
    const [selectedJob, setSelectedJob] = useState<number>(0);

    const jobs: IJob[] = [
        {
            name: 'Spark Technologies',
            title: "Software Developer",
            tasks: [
                t("jobs.spark_techs.point-1"),
                t("jobs.spark_techs.point-2"),
                t("jobs.spark_techs.point-3"),
            ],
            stack: [Icons.typescript, Icons.react, Icons.graphql, Icons.csharp, Icons.sqlserver],
            current: true
        },
        {
            name: 'Application Software',
            title: 'Software Developer',
            tasks: [
                t("jobs.application_software.point-1"),
                t("jobs.application_software.point-2"),
            ],
            stack: [Icons.javascript, Icons.react, Icons.redux, Icons.java, Icons.springboot, Icons.csharp]
        },
    ]

    return (
        <section id="jobs" className="jobs">
            <Heading aligned className="mb-md">{t("jobs.heading")}</Heading>

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
