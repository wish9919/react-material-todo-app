import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
