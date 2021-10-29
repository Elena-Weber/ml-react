import './App.css';
import QuoteList from './containers/QuoteList';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <h1 className="heading">QUOTATOR</h1>
      <Random/>
      <QuoteList/>
    </div>
  );
}

export default App;
