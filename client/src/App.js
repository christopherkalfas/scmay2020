import React from 'react';
import {
  HashRouter as Router, 
  Route
} from 'react-router-dom';
import TrackerList from "./components/TrackerList"
import NewTracker from "./components/NewTracker"
import GroupList from './components/groupComponents/GroupList';
import NewGroup from "./components/groupComponents/NewGroup"

import Home from "./components/layout/Home"
import Nav from './components/layout/Nav'
import './App.css';


function App() {
  return (
    <div>
    <h1>Sweat Clause</h1>
    <Router>
  <Nav />
      <div className="App">
        <Route exact path="/groups" component={GroupList} />
        <Route exact path="/groups/new" component={NewGroup} />
        <Route exact path="/" component={Home} />
        <Route exact path="/trackers" component={TrackerList} />
        <Route exact path="/trackers/new" component={NewTracker} />
      </div>
    </Router>
    </div>
  );
}

export default App;
