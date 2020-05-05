import React from 'react';
import {
  HashRouter as Router,
  Route
} from "react-router-dom"
import TrackerList from "./components/TrackerList"
import NewTracker from "./components/NewTracker"
import './App.css';

function App() {
  return (
    <div>
    <h1>Sweat Clause</h1>
    <Router>
      <div className="App">

        <Route exact path="/" component={TrackerList} />
        <Route exact path="/trackers/new" component={NewTracker} />
      </div>
    </Router>
    </div>
  );
}

export default App;
