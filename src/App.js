import logo from './logo.svg';
import './App.css';

import useFetch from './hooks/useFetch'

function App() {
  const data = useFetch('https://www.googleapis.com/books/v1/volumes?q=php&key=AIzaSyA7qptRezeN4YlCDe47CRcDN8XMNpTG0P8', {})
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
