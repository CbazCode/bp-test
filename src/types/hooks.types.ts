import Colors from "../styles/Colors";

export interface UseThemeColorProps {
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark;
}
