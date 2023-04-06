import './index.scss'
import {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom'
import React, { Component } from "react";

function Conteudoreceita( {receita} ){

    /* const {receitaId} = useParams();
    const receitaSelecionada = receita.find((selecionada) => selecionada.id == receitaId); */


    return(
        <>
        <div className="conteudoreceita">
            <div className='imagemreceita'><img src={receita.imagem} alt={receita.nome} /></div>
            <div className='textoreceita'>
            <h1>{receita.nome}</h1>
            <h2>Ingredientes</h2>
            <p>{receita.ingredientes}</p>
            <h2>Modo de preparo</h2>
            <p>{receita.mododepreparo}</p>
            </div>
        
        </div>

        </>
    )
}

export default Conteudoreceita