
import React, {useState} from 'react'

import useLocalStorage from './hooks/useLocalStorage'

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
            <Main />
         </LibraryContext.Provider>
       </BooksContext.Provider>
      
    </div>
  );
}

export default App;
