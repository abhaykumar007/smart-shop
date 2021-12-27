import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import CardInfo from "./Pages/cardInfo";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={DashBoard} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/cardinfo" exact component={CardInfo} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
