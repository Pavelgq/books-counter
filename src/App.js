
import React, {useState} from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import useLocalStorage from './hooks/useLocalStorage'

import Routes from './routes'
import BooksContext from './contexts/booksContext'
import LibraryContext from './contexts/libraryContext'
import './App.css';
import Main from './pages/main';

function App() {
  const [data, setData] = useState(null)
  const [library, setLibrary] = useLocalStorage('library', [])
  return (
    <div className="App">
      
       <BooksContext.Provider value={{data, setData}} >
         <LibraryContext.Provider value={{library, setLibrary}}>
            <Router>
              <Routes />
            </Router>
         </LibraryContext.Provider>
       </BooksContext.Provider>
      
    </div>
  );
}

export default App;
