import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home.js'
import TownInDetail from './components/TownInDetail';

const  App = () => {
  return (
    <HashRouter>
        <div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/town1" component={Home} />
          <Route path="/t" component={TownInDetail} />
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;
