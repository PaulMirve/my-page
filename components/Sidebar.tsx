import React, { ReactNode } from "react";
import styles from "@sass/components/sidebar.module.scss";
import classNames from "classnames";

type Props = {
  visible: boolean;
  onClose: () => void;
  children?: ReactNode | ReactNode[];
};

const Sidebar = ({ visible, onClose, children }: Props) => {
  return (
    <div
      className={classNames(styles.wrapper, { [styles.visible]: visible })}
      onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={styles.sidebar}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
