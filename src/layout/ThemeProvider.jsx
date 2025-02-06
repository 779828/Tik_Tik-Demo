import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

export default function ThemeProvider({ children, darkMode }) {
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#f4f4f4",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#ffffff" : "#000000",
      },
    },
  });

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
