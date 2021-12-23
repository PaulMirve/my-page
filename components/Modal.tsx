import styles from '@sass/components/modal.module.scss';

interface Props {
    children?: React.ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: Props) => {
    return (
        <div className={`${styles.modal} ${isOpen ? styles.modal__open : ""}`} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal