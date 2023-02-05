import colors from "@sass/components/colors.module.scss";
import { Color } from "@_types/Color";
import { useTheme } from "./useTheme";

export const useGetColor = (name: Color) => {
  const { theme } = useTheme();

  return colors[`${theme}-${name}`];
};
