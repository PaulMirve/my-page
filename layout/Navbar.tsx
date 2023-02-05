import Typography from "components/Typography";
import React, { useEffect, useState } from "react";
import styles from "@sass/layout/navbar.module.scss";
import ToggleButton from "components/ToggleButton";
import Icon from "components/Icon";
import classNames from "classnames";
import { useTheme } from "@hooks/useTheme";
import { useRouter } from "next/router";

const links: { name: string; to: string }[] = [
  {
    name: "About",
    to: "/#about",
  },
  {
    name: "Experience",
    to: "/#experience",
  },
  {
    name: "Projects",
    to: "/",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { push } = useRouter();
  const [visible, setVisible] = useState(true);
  const [lastScrollPositon, setLastScrollPosition] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollPositon) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPositon]);

  return (
    <div
      className={classNames(styles.navbar, theme, {
        [styles.visible]: visible,
      })}>
      <div className={styles.toggle}>
        <Icon name="sun" size={18} />
        <ToggleButton
          onChange={(value) => {
            setTheme(value ? "dark" : "light");
          }}
          value={theme === "dark"}
        />
        <Icon name="moon" />
      </div>
      <div className={styles.links}>
        {links.map(({ name, to }, index) => (
          <div
            style={{ cursor: "pointer" }}
            key={index}
            className={styles.link}
            onClick={() => push(to)}>
            <Typography color="primary" bold>
              {index + 1}.
            </Typography>
            <Typography>{name}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
