import { IJob } from 'interfaces/IJob';
import { useTranslation } from 'react-i18next'
import styles from '@sass/components/job.module.scss';

const Job = ({ name, tasks, current, stack }: IJob) => {
    const { t } = useTranslation();
    return (
        <div>
            <div className={styles.title}>{name} {current && <b>{t("jobs.current")}</b>}</div>
            <div className={styles.stack}>
                {
                    stack.map((icon, index) => {
                        return <img key={index} src={icon} loading='lazy' />
                    })
                }
            </div>
            <div className={styles.activities}>
                {
                    tasks.map((task, index) => {
                        return (
                            <div key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                    <title>Caret Forward</title>
                                    <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                                </svg>
                                <p className={styles.task}>
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