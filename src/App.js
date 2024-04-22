import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import Button from './components/button/button';
import { Router } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>




           <Routes>
            <Route path="pages/Home" element={<Home />} />
            <Route path="pages/About" element={<About />} />
            <Route path="pages/Contact" element={<Contact />} />
          </Routes>





          </Router>


        <img src={logo} className="App-logo" alt="logo" />
        <Card/>
        <Button/>
      </header>
     
    </div>
  );
}

export default App;
