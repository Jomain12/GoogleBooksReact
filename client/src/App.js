import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";
import BookSearch from "./components/BookSearch/BookSearch";
import SavedBooks from "./components/SavedBooks/savedbooks";
import NAV from "./components/Nav/nav";

function App() {
  return (
    <div className="App">
      <Router>
        <NAV />
        <Switch>
          <Route exact path="/">
            <BookSearch />
          </Route>
          <Route exact path="/saved">
            <SavedBooks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
