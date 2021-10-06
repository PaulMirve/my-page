import React from 'react'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    aligned?: boolean
}

const Heading = ({ aligned, children, className = "" }: Props) => {
    return (
        <h1 className={`heading heading--primary ${className} ${aligned ? 'tac' : ""}`}>{children}</h1>
    )
}

export default Heading
