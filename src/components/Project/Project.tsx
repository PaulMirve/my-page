import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import IProject from '../../interfaces/Project'
import Icon from '../Icon/Icon'
import Modal from '../Modal/Modal'

const Project: React.FC<IProject> = ({ name, description, img, repo, live, orientation, stack, modalImg }) => {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (
        <div className={`project ${orientation === "left" ? 'project--left' : ' '}`}>
            <div className="project__frame">
                <p onClick={() => setModalOpen(true)} className="project__preview">{t("projects.see_preview")}</p>
                <img src={img} alt={name} />
            </div>
            <div className="project__content">
                <h3 className="project__title">{name}</h3>
                <div className="project__stack">
                    {
                        stack.map((tech, index) => {
                            return <Icon key={index} icon={tech} />
                        })
                    }
                </div>
                <div className="project__description">
                    {description}
                </div>
                <div className="project__links">
                    <a target="_blank" rel="noopener noreferrer" href={repo} className="btn btn--small btn--link">View repo</a>
                    <a target="_blank" rel="noopener noreferrer" href={live} className="btn btn--small btn--link">View live</a>
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <img className="project__img" src={modalImg} alt="Modal" />
            </Modal>
        </div>
    )
}

export default Project
