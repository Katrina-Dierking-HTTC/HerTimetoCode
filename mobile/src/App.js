
import './App.css'
import Home from "./components/staticPages/Home"
import About from "./components/staticPages/About"
import Contact from "./components/staticPages/Contact"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'




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
        <Route path = '/contact' component={Contact} />
      
      </Switch>
    </Router>  
  </>
  );
}

export default App;
