import styles from '@sass/components/skill.module.scss';
import { ISkill } from 'interfaces/ISkill';

const Skill = ({ name, img }: ISkill) => {
    return (
        <div className={styles.skill}>
            <img src={img} alt={name} loading='lazy' />
            <p>{name}</p>
        </div>
    )
}

export default Skill
