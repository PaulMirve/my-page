import { Theme, ThemeContext } from "@context/ThemeContext";
import styles from "@sass/components/layout.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  const [theme, _setTheme] = useState<Theme>("light");

  const setTheme = (theme: Theme) => {
    _setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const localStorageValue = localStorage.getItem("theme");
    if (localStorageValue) {
      setTheme(localStorageValue as Theme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: theme as Theme, setTheme }}>
      <Navbar />
      <main className={classNames(theme, styles.layout)}>{children}</main>
      <Footer />
    </ThemeContext.Provider>
  );
};

export default Layout;
