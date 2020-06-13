import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./Home"


class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            {/* <Redirect
              from="/"
              to="/home" /> */}
            <Switch>
              <Route
                component={Home} />
             {/* <Route component={PageError} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
  export default App
