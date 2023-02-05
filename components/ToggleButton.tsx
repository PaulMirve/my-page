import styles from "@sass/components/toggle-button.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";

type Props = {
  value: boolean;
  onChange?: (value: boolean) => void;
};

const ToggleButton = ({ value, onChange }: Props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(value);
  }, [value]);

  return (
    <div
      className={classNames(styles.toggleButton, { [styles.active]: active })}
      onClick={() => {
        setActive(!active);
        onChange?.(!active);
      }}
    />
  );
};

export default ToggleButton;
