import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import TownInDetail from './components/TownInDetail.js';
import About from './components/About.js';
import Contacts from './components/Contacts.js';

const  App = () => {
  return (
    <HashRouter>
        <div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/townsvea1" component={TownInDetail} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;
