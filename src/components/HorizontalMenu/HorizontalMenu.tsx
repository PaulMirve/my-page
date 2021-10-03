import React, { useState } from 'react'

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
        <div className="horizontal-menu">
            {
                jobs.map((job, index) => {
                    return <button className={`horizontal-menu__btn ${selectedItem === index ? 'active' : ''} `} onClick={() => onClick(index)} key={index}>{job}</button>
                })
            }
        </div>
    )
}

export default HorizontalMenu
