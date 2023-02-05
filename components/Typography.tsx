import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "@sass/components/typography.module.scss";
import { Color } from "@_types/Color";
import { useGetColor } from "@hooks/useGetColor";

export type TypographyVariants =
  | "body"
  | "bigTitle"
  | "title"
  | "caption"
  | "subtitle";

const defaulColor: Color = "text";

type Props = {
  variant?: TypographyVariants;
  color?: Color;
  bold?: boolean;
  clickable?: boolean;
} & DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const Typography = ({
  variant = "body",
  color = defaulColor,
  className,
  style,
  children,
  bold,
  clickable,
  ...props
}: Props) => {
  const titleFonts = ["bigTitle", "title"];
  const isTitle = titleFonts.includes(variant);
  const _color = useGetColor(
    isTitle && color === defaulColor ? "colors" : color,
  );

  return (
    <p
      {...props}
      style={{ color: _color, ...style }}
      className={classNames(
        styles[variant],
        { [styles.clickable]: clickable },
        { [styles.bold]: bold },
        className,
      )}>
      {children}
    </p>
  );
};

export default Typography;
