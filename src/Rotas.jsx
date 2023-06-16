
//--COMPONENTES

import Home from "./assets/componentes/home/Home";
import Receita from "./assets/componentes/receita/Receita";
import './assets/componentes/animation/animation.css'
import Header from './assets/componentes/header/Header'
import Footer from './assets/componentes/footer/Footer'
// import Form from './assets/componentes/form/Form'

//--CSS

import "./index.css";

//--REACT HOOKS

import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//--FIREBASE

import { initializeApp } from "firebase/app"; //importa o firebase
import { collection, getDocs, getFirestore } from "firebase/firestore"; //importa o Database firestore
import { getAnalytics } from "firebase/analytics"; //importa o google analytics

const firebaseApp = initializeApp( //firebaseApp recebe as informações de login do Database
    {
    apiKey: "AIzaSyCoWdQxSi2J5GBoob5oUqqZw_WewYcdt6Q",
    authDomain: "receitasapi-afb03.firebaseapp.com",
    projectId: "receitasapi-afb03",
/*     storageBucket: "receitasapi-afb03.appspot.com",
    messagingSenderId: "777024978622",
    appId: "1:777024978622:web:fba48660a345a0e8e3e8ef",
    measurementId: "G-C2QW66N50Z" */
});

//const analytics = getAnalytics(initializeApp);

function Rotas() {

    const [receitas, setReceitas] = useState([])

    const db = getFirestore(firebaseApp)
    const receitaCollectionRef = collection(db, 'receitas')
    //uma const que recebe da get no firestore e passa as informações de login pela const firebaseApp
    
    useEffect( //a partir do momento que carrega a página o useEffect busca os dados do Database
        ()=>{
            const getReceitas = async () => {
                const dadosreceitas = await getDocs(receitaCollectionRef)
                console.log(dadosreceitas.docs.map((doc) => ({...doc.data(), id: doc.id})))
                //trata dos dados do Database para que ele traga apenas o que está dentro de data
                setReceitas(dadosreceitas.docs.map((doc) => ({...doc.data(), id: doc.id})))
                // faz com que o receitas mude para setReceitas no usestate, recebendo os dados de dadosreceitas
            }
            getReceitas()
        }, [] //é preciso colocar os [] para que não fique dando useeffect eternamente
    ) 

    const location = useLocation();
    return (
        <>
        
        <Header/>
        <TransitionGroup>
            <CSSTransition key={location.key} className="transition" timeout={750}>
            <Routes location={location}>
                <Route exact path="/" element={<Home data={receitas}/>} />
                <Route exact path="/receita/:receitaId" element={<Receita data={receitas}/>} />
                {/* <Route exact path="/cadastrarreceita" element={<Form userref={receitaCollectionRef}/>}/> */}
            </Routes>
            </CSSTransition>
        </TransitionGroup>
        
        </>
    );
}

export default Rotas;
