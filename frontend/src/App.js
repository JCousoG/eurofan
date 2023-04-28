import './App.css';
import { ContextProvider } from './componentes/contexto';
import Navegador from './componentes/navegador';

function App() {

  
  return (
    <div className='App'>
    <h1>Eurovisión 2023</h1>
      
    <ContextProvider>
      <Navegador/>
    </ContextProvider>
    </div>
   
  );
}

export default App;
