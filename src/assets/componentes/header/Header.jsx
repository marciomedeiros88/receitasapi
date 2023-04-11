import logo from '../../imagens/receitas_laranja.svg';
import './index.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <header className='Header'>
            <Link to="/">
            <img src={logo} alt="Logo Receitas API" />
            </Link>
        <p>API de receitas em desenvolvimento</p>
        </header>
        
        </>
    );
}

export default Header;