import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import common from "@material-ui/core/colors/common";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";

const tema = createMuiTheme({
  palette: {
    primary: {
      light: common["white"],
      main: common["white"],
      dark: common["white"]
    },
    secondary: {
      light: common["black"],
      main: common["black"],
      dark: common["black"]
    }
  }
});

render(
  <MuiThemeProvider theme={tema}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
// TODO: DESARROLLANDO APPS CON NODEJS
/**
|--------------------------------------------------
| PRUEBAS
|--------------------------------------------------
*/
console.log("====================================");
console.log("v1.0.0 - BETA");
console.log("====================================");
