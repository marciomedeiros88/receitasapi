import Card from '../card/Card'
import './index.scss'

function Home({data}){
    console.log(data);
    return(
        <>
        <main className='Home'>
        
        {data.map((receita) => (
            <Card key={receita.id} data={receita}/>

        ))}
        </main>
        </>
    )

}

export default Home