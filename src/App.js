import logo from './logo.svg';
import './App.css';
import Monitors from './components/Monitors/Monitors';
import Header from './components/Header/Header';
import Answer from './components/Answer/Answer';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Monitors></Monitors>
    <Answer></Answer>
    </div>
  );
}

export default App;
