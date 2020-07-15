import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import configureStore from "../redux/configureStore";
import { Theme, ThemeProvider } from "@material-ui/core/styles";
import Test from "../test/Test";
import { theme, secondTheme } from "../commons/theme";

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const storeConfiguration = configureStore();

function App() {
  return (
    <Provider store={storeConfiguration}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
            <Route path='/'>
              <Test />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
