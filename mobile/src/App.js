import logo from './logo.svg';
import './App.css';
// import './Menu.css';
import Home from "./components/staticPages/Home"
import {BrowserRouter as Router, Route} from 'react-router-dom'




function App() {
  return (
    <div className="App">
     
        <Route exact path = "/" component = {Home} />
  
    </div>
  );
}

export default App;
