
import './App.scss'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from "./components/staticPages/Home"
import About from "./components/staticPages/About"
import Shop from "./components/shop/pages/Shop"
import Community from "./components/staticPages/Community"
import Resume from './components/main/resume/Resume'
import NotFound from './components/NotFound'
import ShopPage from './components/shop/pages/ShopPage'
import SingleProduct from './components/shop/single-product/SingleProduct'
import CartPage from './components/shop/pages/cart-page/CartPage'
import Checkout from './components/shop/checkout/Checkout'
import Projects from './components/staticPages/projects/Projects'
import Landing from './components/staticPages/landing/Landing'





function App() {
  return (
    <>
    <div className="App">
     </div> 
    
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path = '/landing' component={Landing} />
        <Route path = '/about' component={About} />
        <Route path = '/projects' component={Projects} />
        <Route path = '/resume' component={Resume} />
        <Route path = '/community' component={Community} />
        <Route path = '/shop' component={Shop} />
        <Route path = '/shopPage' component={ShopPage} />
        <Route path = '/cart' component={CartPage} />
        <Route path = '/checkout' component = {Checkout} />
        <Route path = '/product/:id' component ={SingleProduct} />
        <Route path='*' component={NotFound} />
        
        {/* <Route path = '/portfolio' component={Portfolio}/> */}
      
      </Switch>
    </Router>  
  </>
  );
}

export default App;
