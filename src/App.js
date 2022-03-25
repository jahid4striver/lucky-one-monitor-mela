import logo from './logo.svg';
import './App.css';
import Monitors from './components/Monitors/Monitors';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Monitors></Monitors>
    </div>
  );
}

export default App;
