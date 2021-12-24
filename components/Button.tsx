import styles from '@sass/components/button.module.scss';
import { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
    variant?: 'default' | 'black' | "link",
    size?: "default" | "small"
}

const Button = ({ variant, size, className = "", children, ...props }: Props) => {
    const getVariant = () => {
        switch (variant) {
            case 'black':
                return styles.black;
            case 'link':
                return styles.link;
            default:
                return;
        }
    }
    return (
        <button className={`${styles.btn} ${getVariant()} ${size === "small" && styles.small} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button
