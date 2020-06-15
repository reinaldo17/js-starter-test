import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/"
              exact
              component={Login} />
            <Route
              path="/home"
              exact
              component={Home} />
              <Route
              path="/register"
              exact
              component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

  export default App
