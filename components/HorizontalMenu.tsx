import styles from '@sass/components/horizontal-menu.module.scss';

import { useState } from 'react'

interface Props {
    jobs: string[],
    onChange?: (index: number) => void
}

const HorizontalMenu = ({ onChange = () => { }, jobs }: Props) => {
    const [selectedItem, setSelectedItem] = useState<number>(0);

    const onClick = (index: number) => {
        onChange(index);
        setSelectedItem(index);
    }
    return (
        <div className={styles['horizontal-menu']}>
            {
                jobs.map((job, index) => {
                    return <button className={`${styles.btn} ${selectedItem === index ? styles.active : ''} `} onClick={() => onClick(index)} key={index}>{job}</button>
                })
            }
        </div>
    )
}

export default HorizontalMenu