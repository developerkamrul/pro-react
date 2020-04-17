import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./animate.css";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Nav";
import Contact from "./components/Contact";
import Main from "./components/Main";
import MySkills from "./components/MySkills";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <Route exact path="/" component={Main} />
          <Route exact path="/skills" component={MySkills} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;
