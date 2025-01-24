import Dashboard from "./components/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  function toggleTheme() {
    setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
