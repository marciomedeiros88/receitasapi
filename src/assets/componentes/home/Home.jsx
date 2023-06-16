import Card from '../card/Card'
import './index.scss'
import Video from '../video/Video'
import InfiniteScroll from '../../services/InfiniteScroll'
import { useState } from 'react'

function Home({data}) {
    const [estado, setEstado] = useState('show');

    return(
        <>
        <div>
        <Video/>
        </div>
        
        <main className='Home'>
        
        {data.map((receita) => (
            <div id='card_home' className={estado}  >
            <Card key={receita.id} data={receita}/>
            </div>
        ))}
        
        {data.data && (
        <InfiniteScroll fetchMore={() => console.log('Apareceu')}/>
        )}
        </main>
        
        </>
    )
        }

export default Home