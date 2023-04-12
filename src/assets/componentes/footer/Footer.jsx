import logo from '../../imagens/receitas_laranja.svg'
import github from '../../imagens/icon_github.svg'
import linkedin from '../../imagens/icon_linkedin.svg'
import behance from '../../imagens/icon_behance.svg'
import './index.scss'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
        <section className='rodapeilustracao'></section>
        <footer className='Footer'>
            <div class="text">
                <p>Desenvolvido por Márcio Medeiros</p>
            </div>
            <div className='redes'>
            <a href="https://www.linkedin.com/in/marcio-s-medeiros/" target="_blank">
                <img src={linkedin} alt="Linkedin Márcio Medeiros"/>
            </a>
            <a href="https://github.com/marciomedeiros88/" target="_blank">
                <img src={github} alt="Github Márcio Medeiros"/>
            </a>
            <a href="https://www.behance.net/marciomedeiros/" target="_blank">
                <img src={behance} alt="Behance Márcio Medeiros"/>            
            </a>
            </div>
        </footer>
        
        </>
    );
}

export default Footer;