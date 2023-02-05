import React, { HTMLProps, ReactNode } from "react";
import styles from "@sass/layout/section.module.scss";
import classNames from "classnames";

type Props = {
  children: ReactNode | ReactNode[];
} & HTMLProps<HTMLDivElement>;

const Section = ({ children, className, ...props }: Props) => {
  return (
    <div {...props} className={classNames(styles.section, className)}>
      <div>{children}</div>
    </div>
  );
};

export default Section;
