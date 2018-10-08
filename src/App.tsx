import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavContainer from "./components/Nav/NavContainer";

import logoPng from "./logo.png";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <NavContainer />
          <Route path="/" component={Home} />
          <header className="App-header">
            <img src={logoPng} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Gainr</h1>
            <h2>
              <i>Take it up a step.</i>
            </h2>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
