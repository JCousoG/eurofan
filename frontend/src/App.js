import './App.css';
import Votar from './vistas/votar.jsx'
import { ContextProvider } from './componentes/contexto';
import Navegador from './componentes/navegador';

function App() {
  function manexadorBoton () {
    
    window.location.reload()
  }
  
  return (
    <>
    <h1>Eurovisión 2023</h1>
    <button onClick={manexadorBoton}>Volver a votar</button>
    
    <ContextProvider>
      <Navegador/>
    </ContextProvider>
    </>
   
  );
}

export default App;
