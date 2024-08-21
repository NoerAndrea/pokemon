import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components";
import logoDefault from "../../assets/pokemon-logo-png-1421.png";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#1D9BF0",
    secondary: "#AFDBD2",
    btnPrimary: "1D9BF0",
    text: "#FFFF",
    gray1: "#333333",
    gray2: "#4F4F4F",
    gray3: "#828282",
    gray4: "#c3c3c3",
    gray5: "#E0E0E0",
    gray6: "#E9E9E9",
    gray7: "#F2F2F2",
    gray8: "#fcfcfcde",
  },
  fonts: {
    default: "Karla, Roboto, sans-serif",
  },
  fontSize: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  },
  images: {
    logo: logoDefault,
  },
};

interface LightThemeProps {
  children: React.ReactNode;
}

export function LightTheme(props: LightThemeProps) {
  return <ThemeProvider theme={lightTheme}>{props.children}</ThemeProvider>;
}
