import { createTheme, ThemeProvider } from "@material-ui/core";
import FrontPage from "./FrontPage";
import Layout from "./Layout";

const theme = createTheme({
  typography: {
    fontFamily: "Olopus",
  },

  palette: {
    primary: {
      light: "#c6582d",
      main: "#8f2901",
      dark: "#5c0000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffcb8b",
      main: "#ff9a5c",
      dark: "#c86b2f",
      contrastText: "#000000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <FrontPage />;
      </Layout>
    </ThemeProvider>
  );
}

export default App;
