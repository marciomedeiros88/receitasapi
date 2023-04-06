
import './index.scss'
import Conteudoreceita from '../conteudoreceita/Conteudoreceita'
import {Link, useParams } from 'react-router-dom'

function Receita({ data }){
    const {receitaId} = useParams();
    const receitaSelecionada = data.find((receita) => receita.id == receitaId);

    console.log(receitaSelecionada)
    return(
        <>
        <main className='Receita'>

            {/* nao posso usar o .map aqui ou todas as receitas passarao para Conteudoreceita */}
            <Conteudoreceita key={receitaSelecionada.id} receita={receitaSelecionada}/>

        </main>
        </>
        
    )

}

export default Receita