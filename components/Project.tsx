import styles from '@sass/components/project.module.scss';
import IProject from 'interfaces/IProjects';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from './Modal'
import Image from 'next/image'
import Button from './Button';

interface Props extends IProject {
    orientation: 'left' | 'right'
}

const Project = ({ name, description, img, repo, live, stack, orientation, modalImg }: Props) => {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (
        <div className={`${styles.project} ${orientation === "left" ? 'project--left' : ' '}`}>
            <div className={styles.frame}>
                <p onClick={() => setModalOpen(true)} className={styles.preview}>{t("projects.see_preview")}</p>
                <img src={img} alt={name} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{name}</h3>
                <div className={styles.stack}>
                    {
                        stack.map((tech, index) => {
                            return (
                                <img key={index} src={tech} />
                            );
                        })
                    }
                </div>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.links}>
                    <Button size='small'>View repo</Button>
                    <Button size='small'>View live</Button>
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <img className={styles.img} src={modalImg} alt="Modal" />
            </Modal>
        </div>
    )
}

export default Project