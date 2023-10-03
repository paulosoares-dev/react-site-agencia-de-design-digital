import Logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png';
import iconeSol from '../../assets/sun.png';
import './style.css';

const Topo = (props) => {
    return (
        <header className={props.ehTemaEscuro ? "topo-modo-escuro" : "topo-modo-claro"}>
            <img src={Logo} alt="logomarca" className='logo'/>
            <button onClick={props.alterarTema} className={props.ehTemaEscuro ? 'btn-modo-escuro' : 'btn-modo-claro'}>
                <img src={props.ehTemaEscuro ? iconeSol : iconeLua} alt="tema" className='iconesBtn'/>
            </button>
        </header>    
    );
}

export default Topo;