
import React, {useState} from 'react'

import BooksContext from './contexts/booksContext'
import './App.css';
import Main from './pages/main';

function App() {
  const [data, setData] = useState(null)
  return (
    <div className="App">
       <BooksContext.Provider value={{data, setData}} >
          <Main />
       </BooksContext.Provider>
      
    </div>
  );
}

export default App;
