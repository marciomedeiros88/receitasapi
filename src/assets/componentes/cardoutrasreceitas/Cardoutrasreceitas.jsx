import './index.scss'
import { Link } from 'react-router-dom'

function Cardoutrasreceitas({ data }){
    console.log(data);
    return(
        <>
        
        <Link
        to={`/receita/${data.id}`}
        style={{ textDecoration: "none", color: "black" }}>
        <div className="cardoutrasreceitas" style={{ backgroundImage:`url(${data.imagem})`}}>
        <h1>{data.nome}</h1>
        
        </div>
        </Link>
        
        </>
    )

}

export default Cardoutrasreceitas