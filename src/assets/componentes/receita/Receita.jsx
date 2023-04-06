
import './index.scss'
import Cardoutrasreceitas from '../cardoutrasreceitas/Cardoutrasreceitas'
import Conteudoreceita from '../conteudoreceita/Conteudoreceita'
import {Link, useParams } from 'react-router-dom'

function Receita({ data }){
    const {receitaId} = useParams();
    const receitaSelecionada = data.find((receita) => receita.id == receitaId);

    const num1 = 7
    const num2 = 10

    /* const num2 = data[Math.floor(Math.random() * data.length)] */


    const outrasreceitas = data.slice(num1,num2)
    console.log(num1)
    return(
        <>
        <main className='Receitas'>
            <section className='receitaprincipal'>
                {/* nao posso usar o .map aqui ou todas as receitas passarao para Conteudoreceita */}
            <Conteudoreceita key={receitaSelecionada.id} receita={receitaSelecionada}/>
            </section>
            <section className='outrasreceitas'>
                <div className='outrasreceitas_card'>
            {outrasreceitas.map((receita) => (
            <Cardoutrasreceitas key={receita.id} data={receita}/>
            ))}
                </div>
            </section>
            

        </main>
        </>
        
    )

}

export default Receita