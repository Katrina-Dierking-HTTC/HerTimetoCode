import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import ProductsContextProvider from './context/ProductsContext'
import CartContextProvider from './context/CartContext';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'

const stripePromse = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
styleLink.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css";
document.head.appendChild(styleLink);


ReactDOM.render(
  
    <Router>
    
      <ProductsContextProvider>
        <CartContextProvider>
          <App />
          <Elements stripe={stripePromse}/>
        </CartContextProvider>
      </ProductsContextProvider>
    </Router>,

  document.getElementById('root')
);

reportWebVitals();
