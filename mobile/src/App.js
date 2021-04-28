
import './App.scss'
import Home from "./components/staticPages/Home"
import About from "./components/staticPages/About"
import Contact from "./components/staticPages/Contact"
import Shop from "./components/shop/pages/Shop"
import Community from "./components/staticPages/Community"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import ShopPage from './components/shop/pages/ShopPage'
import SingleProduct from './components/shop/single-product/SingleProduct'
import CartPage from './components/shop/pages/cart-page/CartPage'
import Checkout from './components/shop/checkout/Checkout'
import Portfolio from './components/staticPages/portfolio/Portfolio'
import Portfolio1 from './components/staticPages/portfolio/Portfolio1'





function App() {
  return (
    <>
    <div className="App">
     </div> 
    
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path = '/about' component={About} />
        <Route path = '/portfolio' component={Portfolio}/>
        <Route path = '/portfolio1' component={Portfolio1}/>
        <Route path = '/contact' component={Contact} />
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
