import Typography from "components/Typography";
import { HTMLProps } from "react";
import styles from "@sass/layout/section-title.module.scss";
import classNames from "classnames";

type Props = {
  number: number;
} & HTMLProps<HTMLDivElement>;

const SectionTitle = ({ children, number, className, ...props }: Props) => {
  return (
    <div {...props} className={classNames(styles.title, className)}>
      <Typography
        variant="title"
        bold
        color="colors-03"
        style={{ marginRight: 5 }}>
        {number}.
      </Typography>
      <Typography variant="title">{children}</Typography>
    </div>
  );
};

export default SectionTitle;
