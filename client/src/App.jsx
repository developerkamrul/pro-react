import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './animate.css';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Nav';
import Contact from './components/Contact';
import Main from './components/Main';
import MySkills from './components/MySkills';
import UnderConstruct from './components/UnderConstruct';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <div className='container'>
          <Route exact path='/' component={Main} />
          <Route exact path='/skills' component={MySkills} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/Components' component={UnderConstruct} />
          <Route exact path='/about' component={UnderConstruct} />
        </div>
      </Router>
    </div>
  );
}

export default App;
