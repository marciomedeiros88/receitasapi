import Card from '../card/Card'
import './index.scss'
import Video from '../video/Video'

function Home({data}){
    console.log(data);
    return(
        <>
        <div>
        <Video/>
        </div>
        <main className='Home'>
        
        {data.map((receita) => (
            <Card key={receita.id} data={receita}/>

        ))}
        </main>
        </>
    )

}

export default Home