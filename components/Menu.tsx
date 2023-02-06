import styles from "@sass/components/menu.module.scss";
import classNames from "classnames";
import { HTMLProps, useState } from "react";
import Icon from "./Icon";
import Typography from "./Typography";

export type MenuOption = {
  index: number;
  label: string;
  points: string[] | JSX.Element[];
};

type Props = {
  options: MenuOption[];
} & HTMLProps<HTMLDivElement>;

const Menu = ({ options, ...props }: Props) => {
  const [selectedOption, setSelectedOption] = useState<MenuOption>(options[0]);

  return (
    <div {...props} className={classNames(styles.main, props.className)}>
      <Typography
        variant="title"
        style={{ fontSize: 20 }}
        className={styles.title}>
        Software Engineer
      </Typography>
      <div className={styles.options}>
        {options.map((option) => {
          const { index, label } = option;
          return (
            <Typography
              key={index}
              bold={selectedOption.index === index}
              clickable
              style={{ lineHeight: "22px" }}
              onClick={() => setSelectedOption(option)}
              className={styles.label}>
              {label}
            </Typography>
          );
        })}
      </div>
      <div className={styles.content}>
        {selectedOption.points.map((option, index) => {
          return (
            <div key={index} className={styles.row}>
              <div style={{ width: 20 }}>
                <Icon
                  name="caret-right"
                  color="primary"
                  style={{ marginTop: 5 }}
                />
              </div>
              <Typography>{option}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
