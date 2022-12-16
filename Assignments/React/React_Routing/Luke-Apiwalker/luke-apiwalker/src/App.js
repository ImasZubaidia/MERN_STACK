import './App.css';
import  { Router } from '@reach/router';
import Search from './components/Search';
import SearchingResult from './components/SearchingResult';
function App() {
  return (
    <div className="App">
      <Search />
      <Router>
        
        <SearchingResult path={"/:option/:id"} />
      </Router>
    </div>
  );
}

export default App;
