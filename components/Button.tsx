import styles from "@sass/components/button.module.scss";
import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Icon, { IconName } from "./Icon";

export type ButtonVariants = "primary" | "outlined";

type Props = {
  fullWidth?: boolean;
  variant?: ButtonVariants;
  size?: "default" | "small";
  icon?: IconName;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  variant = "primary",
  size = "default",
  fullWidth,
  className,
  icon,
  children,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        styles[variant],
        styles[size],
        { [styles.fullWidth]: fullWidth },
        { [styles.withIcon]: icon },
        className,
      )}>
      {icon && <Icon size={15} name={icon} />}
      {children}
    </button>
  );
};

export default Button;
