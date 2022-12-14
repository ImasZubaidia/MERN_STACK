
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import NumberWord from './components/NumberWord';
import Color from './components/Color';
function App() {
  return (
    <div className="App">
        <Router>
            <Home path="/home"/>
            <NumberWord path="/:text"/>
            <Color path="/:text/:c1/:c2"/>
        </Router>
    </div>
  );
}

export default App;


