import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      

        
        <Card/>
        <Button/>
      </header>
     
    </div>
  );
}

export default App;
