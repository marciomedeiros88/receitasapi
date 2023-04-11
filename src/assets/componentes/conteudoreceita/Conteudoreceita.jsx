import './index.scss'
import {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom'
import React, { Component } from "react";
import icone_tempo from '../../imagens/time.svg'
import icone_porcoes from '../../imagens/portion.svg'

function Conteudoreceita( {receita} ){

    /* const {receitaId} = useParams();
    const receitaSelecionada = receita.find((selecionada) => selecionada.id == receitaId); */


    return(
        <>
        <div className="conteudoreceita">
            <div className='imagemreceita'><img src={receita.imagem} alt={receita.nome} /></div>
            <div className='textoreceita'>
            <h1>{receita.nome}</h1>
            <div className='info'>
            <div className='iconetempo'>
                <img src={icone_tempo} alt="Ícone tempo" />
                <p>{receita.tempo} Minutos</p>
            </div>
            <div className='iconeporcoes'>
                <img src={icone_porcoes} alt="Ícone porções" />
                <p>{receita.porcoes} Porções</p>
            </div>
            </div>
            
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