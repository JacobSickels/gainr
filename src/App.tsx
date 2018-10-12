import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavContainer from "./components/Nav/NavContainer";
import GoalsContainer from "./components/Goals/GoalsContainer";

import { goalList } from "./testing/data_fixtures";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <>
          <NavContainer />
          <Route path="/" component={Home} exact={true} />
          <Route
            path="/Goals"
            render={() => <GoalsContainer goals={goalList} />}
          />
        </>
      </Router>
    );
  }
}

export default App;
