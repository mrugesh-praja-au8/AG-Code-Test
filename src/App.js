import React from "react";
import "./App.scss";
import Login from "./components/login/Login";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
