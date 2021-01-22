import logo from './logo.svg';
import './App.css';
// import './Menu.css';
import Home from "./components/staticPages/Home"
import About from "./components/staticPages/About"
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'




function App() {
  return (
    <>
    <div className="App">
     
        {/* <Home /> */}
  
    </div>
    
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path = '/about' component={About} />
      </Switch>
    </Router>  
  </>
  );
}

export default App;
