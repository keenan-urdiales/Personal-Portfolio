import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
      <p>navbar</p>
      <p>About me</p>
      <p>footer</p>
      <p>projects</p>
      <p>photos</p>
      <p>Hobbies</p>
      <p>Languages</p>
      <p>resume</p>

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
