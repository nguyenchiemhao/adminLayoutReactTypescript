import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "../redux/configureStore";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../commons/theme";
import Router from "./Router";

const storeConfiguration = configureStore();

function App() {
  return (
    <Provider store={storeConfiguration}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
