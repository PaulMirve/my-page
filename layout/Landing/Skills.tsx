import styles from '@sass/layout/landing/skills.module.scss';
import Heading from "components/Heading";
import Skill from 'components/Skill';
import { ISkill } from 'interfaces/ISkill';
import { useTranslation } from "react-i18next";

interface Props {
    skills: ISkill[]
}

const Skills = ({ skills }: Props) => {
    const { t } = useTranslation();
    return (
        <section id="skills" className={styles.skills}>
            <Heading centered className="mb-md">
                {t("skills.heading")}
            </Heading>
            <div className={styles.grid}>
                {
                    skills.sort((a, b) => a.order - b.order).map((skill, index) => {
                        return <Skill key={index} {...skill} />
                    })
                }
            </div>
        </section>
    )
}

export default Skills
