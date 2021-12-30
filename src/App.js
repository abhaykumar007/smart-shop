import "./App.css";
import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import CardInfo from "./Pages/cardInfo";
import Cart from "./Pages/cart";
import Checkout from "./components/checkOut/CheckOut";
import Four0four from "./Pages/four0four";

function App() {
  let user = localStorage.getItem("userEcom");
  function PrivateRoute({ Component, path }) {
    user = localStorage.getItem("userEcom");
    return (
      <Route
        path={path}
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    );
  }
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={DashBoard} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/cardinfo" exact component={CardInfo} />
            <Route path="/cart" exact component={Cart} />
            <PrivateRoute exact path={"/checkout"} Component={Checkout} />
            <Route component={Four0four} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
