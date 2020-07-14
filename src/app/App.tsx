import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import configureStore from "../redux/configureStore";
import Test from "../Test";

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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
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
        </div>
      </Router>
    </Provider>
  );
}

export default App;
