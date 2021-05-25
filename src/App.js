import logo from './logo.svg';
import './App.css';

import useFetch from './hooks/useFetch'

import Search from './components/Search/Search'
import {myAPIkey} from './coverage'

function App() {
  // const data = useFetch(`https://www.googleapis.com/books/v1/volumes?q=php&key=${myAPIkey}`, {})
 
  return (
    <div className="App">
       <Search />
    </div>
  );
}

export default App;
