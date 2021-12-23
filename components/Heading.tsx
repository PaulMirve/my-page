import { ComponentPropsWithoutRef } from "react"
import styles from '@sass/components/heading.module.scss'

interface Props extends ComponentPropsWithoutRef<'div'> {
    centered?: boolean,
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    casing?: 'uppercase' | 'default',
    weight?: 'thin' | 'extra-light' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extra-bold' | 'black',
    font?: 'heading' | 'body'
}

const Heading = ({ className = "", centered, variant, casing, weight, children, ...props }: Props) => {
    const getVariant = () => {
        switch (variant) {
            case 'h1':
                return styles.h1;
            case 'h2':
                return styles.h2;
            case 'h3':
                return styles.h3;
            case 'h4':
                return styles.h4;
            case 'h5':
                return styles.h5;
            default:
                break;
        }
    }

    const getWeight = () => {
        switch (weight) {
            case 'thin':
                return styles.thin;
            case 'extra-light':
                return styles.extra_light;
            case 'light':
                return styles.light;
            case 'regular':
                return styles.regular;
            case 'medium':
                return styles.medium;
            case 'semibold':
                return styles.semibold;
            case 'bold':
                return styles.bold;
            case 'extra-bold':
                return styles.extra_bold;
            case 'black':
                return styles.black;
            default:
                break;
        }
    }

    return (
        <h1 className={`${styles.main} ${getVariant()} ${getWeight()} ${casing === 'uppercase' && styles.uppercase} ${centered && 'tac'} ${className}`} {...props}>
            {children}
        </h1>
    )
}

export default Heading
