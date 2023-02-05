import styles from "@sass/components/button-link.module.scss";
import { Color } from "@_types/Color";
import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import { HTMLProps, ReactNode } from "react";
import { ButtonVariants } from "./Button";
import Icon, { IconName } from "./Icon";

type Props = {
  children: ReactNode;
  icon?: IconName;
  color?: Color;
  variant?: ButtonVariants;
  fullWidth?: boolean;
  anchorProps?: HTMLProps<HTMLAnchorElement>;
} & LinkProps;

const ButtonLink = ({
  color = "primary",
  variant = "ghost",
  icon,
  anchorProps,
  fullWidth,
  children,
  ...props
}: Props) => {
  return (
    <Link {...props}>
      <a
        {...anchorProps}
        className={classNames(styles.buttonLink, styles[variant], {
          [styles.fullWidth]: fullWidth,
        })}>
        {icon && <Icon color={color} name={icon} />}
        {children}
      </a>
    </Link>
  );
};

export default ButtonLink;
