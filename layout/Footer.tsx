import { useTheme } from "@hooks/useTheme";
import styles from "@sass/layout/footer.module.scss";
import classNames from "classnames";
import Typography from "components/Typography";

const Footer = () => {
  const { theme } = useTheme();
  const date = new Date();
  return (
    <div className={classNames(theme, styles.footer)}>
      <Typography color="contrast">
        Designed and Built by Paul Miranda
      </Typography>
      <Typography color="contrast">{date.getFullYear()}</Typography>
    </div>
  );
};

export default Footer;
