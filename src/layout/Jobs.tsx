import React, { useState } from 'react'
import HorizontalMenu from '../components/HorizontalMenu/HorizontalMenu'
import Job from '../components/Job/Job'
import IJob from '../interfaces/Job'

const jobs: IJob[] = [
    {
        name: 'Spark Technologies',
        tasks: [
            'Programming',
            'eat',
            'cake'
        ]
    },
    {
        name: 'Application Software',
        tasks: [
            'Programming',
            'eat',
            'cake'
        ]
    },
]

const Jobs = () => {
    const [selectedJob, setSelectedJob] = useState<number>(0);
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
