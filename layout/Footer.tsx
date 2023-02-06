import { useTheme } from "@hooks/useTheme";
import styles from "@sass/layout/footer.module.scss";
import classNames from "classnames";
import Typography from "components/Typography";

const Footer = () => {
  const { theme } = useTheme();
  const date = new Date();
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "var(--grey)" : "var(--dark)",
      }}
      className={classNames(theme, styles.footer)}>
      <Typography color={theme === "dark" ? "white" : "contrast"}>
        Designed and Built by Paul Miranda
      </Typography>
      <Typography color={theme === "dark" ? "white" : "contrast"}>
        {date.getFullYear()}
      </Typography>
    </div>
  );
};

export default Footer;
