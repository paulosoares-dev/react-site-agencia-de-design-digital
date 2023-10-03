import Topo from './componentes/Topo';
import SecaoBanner from './componentes/SecaoBanner';
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho';
import Rodape from './componentes/Rodape';
import './App.css'
import { useState } from 'react';


function App() {

    const [ehTemaEscuro, setTemaEscuro] = useState(false)

    const alterarTema = () => {
      setTemaEscuro(!ehTemaEscuro)
    }

    return (
        <main>
            <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro} />
            <SecaoBanner ehTemaEscuro={ehTemaEscuro} />
            <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro} />
            <Rodape ehTemaEscuro={ehTemaEscuro} />
        </main>
    );
}

export default App;
