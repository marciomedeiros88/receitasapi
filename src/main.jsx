import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './assets/componentes/header/Header'
import Footer from './assets/componentes/footer/Footer'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    

    <App />

    
    <Footer/>
  </React.StrictMode>,
)
