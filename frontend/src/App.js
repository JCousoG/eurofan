import './App.css';
import Votar from './vistas/votar.jsx'
import { ContextProvider } from './componentes/contexto';
import Navegador from './componentes/navegador';

function App() {
  
  
  return (
    <>
    <h1>Eurovisión 2023</h1>
    <ContextProvider>
      <Navegador/>
    </ContextProvider>
    </>
  );
}

export default App;
