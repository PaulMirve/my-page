import React from 'react'

interface Props {
    children?: React.ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: Props) => {
    return (
        <div className={`modal ${isOpen ? "modal--open" : ""}`} onClick={onClose}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal
