import { useState } from 'react'
import Rotas from './Rotas'
import History from './assets/services/History'
import Header from './assets/componentes/header/Header'
import Footer from './assets/componentes/footer/Footer'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

function App() {

  return (
    <>
    <Header/>
    <Router History={History}>
      <Rotas />
    </Router>
    <Footer/>
    </>
  )
}

export default App
