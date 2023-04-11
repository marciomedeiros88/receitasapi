import { useState } from 'react'
import Rotas from './Rotas'
import History from './assets/services/History'
import Header from './assets/componentes/header/Header'
import Footer from './assets/componentes/footer/Footer'
import './index.css'
import {
  BrowserRouter as Router,
  Link,
  Routes,
  useLocation
} from "react-router-dom";

function App() {

  return (
    <>
    
    <Router History={History}>
      <Rotas />
    </Router>
    
    </>
  )
}

export default App
