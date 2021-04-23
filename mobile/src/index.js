import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import ProductsContextProvider from './context/ProductsContext'

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
styleLink.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css";
document.head.appendChild(styleLink);


ReactDOM.render(
  
    <Router>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
