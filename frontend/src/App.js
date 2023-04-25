import './App.css';
import { ContextProvider } from './componentes/contexto';
import FormularioRexistro from './componentes/formularioRexistro';
import Navegador from './componentes/navegador';

function App() {
  function manexadorBoton () {
    
    window.location.reload()
  }
  
  return (
    <div className='App'>
    <h1>Eurovisión 2023</h1>
    <button onClick={manexadorBoton}>Volver a votar</button>
    <FormularioRexistro/>
    
    <ContextProvider>
      <Navegador/>
    </ContextProvider>
    </div>
   
  );
}

export default App;
