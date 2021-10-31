import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navi from './components/Navi';
import QuoteList from './containers/QuoteList';
import Random from './components/Random';
import AuthorsList from './containers/Authors';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="heading">QUOTATOR</h1>
      <Router>
        <Navi/>
        <Switch>
          <Route exact path="/" component={ Random } />
          <Route exact path="/all_quotes" component={ QuoteList } />
          <Route exact path="/authors" component={ AuthorsList } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;