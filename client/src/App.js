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
    <Router>
      <div className="App">
        <Route exact path="/" component={TrackerList} />
        <Route exact path="/trackers/new" component={NewTracker} />
      </div>
    </Router>
  );
}

export default App;
