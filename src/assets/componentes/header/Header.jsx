import logo from '../../imagens/receitas_laranja.svg'
import './index.scss'

function Header() {
    return (
        <>
        <header className='Header'>
            <img src={logo} alt="Logo Receitas API" />
        <p>API de receitas em desenvolvimento</p>
        </header>
        
        </>
    );
}

export default Header;