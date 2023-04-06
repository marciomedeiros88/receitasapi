
import Home from "./assets/componentes/home/Home";
import Receita from "./assets/componentes/receita/Receita";
import './assets/componentes/animation/animation.css'

import "./index.css";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { product_mock } from "./assets/mockup/mock"

function Rotas() {
    const location = useLocation();
    return (
        <>
        <TransitionGroup>
            <CSSTransition key={location.key} className="transition" timeout={750}>
            <Routes location={location}>
                <Route exact path="/" element={<Home data={product_mock}/>} />
                <Route exact path="/receita/:receitaId" element={<Receita data={product_mock}/>} />
            </Routes>
            </CSSTransition>
        </TransitionGroup>
        </>
    );
}

export default Rotas;
