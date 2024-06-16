import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";
import { defaultGrey } from "../utils/siteThemeColors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Titillium Web",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margin: 0, padding: 0 }}>
        <CssBaseline />
        <NavBar />
        <Grid container>
          <Grid item xs={0} sm={1} sx={{ backgroundColor: defaultGrey }} />
          <Grid item xs>
            {children}
          </Grid>
          <Grid item xs={0} sm={1} sx={{ backgroundColor: defaultGrey }} />
        </Grid>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
