import Dashboard from "./components/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import TitleBar from './components/TitleBar';
import { Box } from "@mui/material";

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
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <TitleBar />
        <Box sx={{ flex: 1, overflow: 'hidden' }}>
          <Dashboard toggleTheme={toggleTheme} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
