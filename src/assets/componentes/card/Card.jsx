import './index.scss'
import { Link } from 'react-router-dom'

function Card({ data }){
    console.log(data);
    return(
        <>
        <div className="cardreceita">
        <img src={data.imagem} alt={data.nome} />
        <h1>{data.nome}</h1>
        <Link
        to={`/receita/${data.id}`}
        style={{ textDecoration: "none", color: "black" }}>
        <button>Ver receita</button>
        </Link>
        </div>
        </>
    )

}

export default Card