import styles from '@sass/layout/landing/jobs.module.scss';
import Heading from 'components/Heading';
import HorizontalMenu from 'components/HorizontalMenu';
import Job from 'components/Job';
import { IJob } from 'interfaces/IJob';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    jobs: IJob[]
}

const Jobs = ({ jobs }: Props) => {
    const { t } = useTranslation();
    const [selectedJob, setSelectedJob] = useState<number>(0);
    return (
        <section id="jobs" className={styles.jobs}>
            <Heading centered className="mb-md">{t("jobs.heading")}</Heading>

            <div className={styles.layout}>
                <HorizontalMenu jobs={jobs.sort((a, b) => a.order - b.order).map(x => x.name)} onChange={(index) => setSelectedJob(index)} />
                {
                    <Job {...jobs[selectedJob]} />
                }
            </div>

        </section>
    )
}

export default Jobs
