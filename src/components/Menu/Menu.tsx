import React from 'react'

interface Props {
    children?: React.ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const Menu = ({ children, isOpen, onClose }: Props) => {
    return (
        <div className={`menu ${isOpen ? "menu--open" : ""}`} onClick={onClose}>
            <div className="menu__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Menu
