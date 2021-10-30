import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navi from './components/Navi';
import QuoteList from './containers/QuoteList';
import Random from './components/Random';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="heading">QUOTATOR</h1>
      <Router>
        <Navi/>
        <Switch>
          <Route exact path="/" component={ QuoteList } />
          <Route exact path="/random" component={ Random } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;