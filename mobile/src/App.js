
import './App.css'
import Home from "./components/staticPages/Home"
import About from "./components/staticPages/About"
// import Blog from "./components/staticPages/Blog"
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
        {/* <Route path = '/blog' component = {Blog} /> */}
      
      </Switch>
    </Router>  
  </>
  );
}

export default App;
