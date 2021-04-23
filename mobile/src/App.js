
import './App.scss'
import Home from "./components/staticPages/Home"
import About from "./components/staticPages/About"
import Contact from "./components/staticPages/Contact"
import Shop from "./components/shop/pages/Shop"
import Community from "./components/staticPages/Community"
// import Portfolio from "./components/staticPages/Portfolio"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'




function App() {
  return (
    <>
    <div className="App">
     </div> 
    
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path = '/about' component={About} />
        <Route path = '/contact' component={Contact} />
        <Route path = '/community' component={Community} />
        <Route path = '/shop' component={Shop} />
        <Route path='*' component={NotFound} />
        {/* <Route path = '/portfolio' component={Portfolio}/> */}
      
      </Switch>
    </Router>  
  </>
  );
}

export default App;
