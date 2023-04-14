import './App.css';
import { ContextProvider } from './componentes/contexto';
import ListaCancions from './componentes/listaCancions';

function App() {
  const cancions = [
    {id: 0,
    pais: "España",
    url:"3iZ43PJMy04"},
    {id: 1,
    pais: "Portugal",
    url: "lvpDLq88cyo"},
    {id: 2,
    pais: "Francia",
    url: "GWfbEFH9NvQ"},
    {id: 3,
    pais: "Alemania",
    url: "Y12_YMs9kCQ"},
    {id: 4,
    pais: "Italia",
    url: "N4HBDAbdXUg"},
    {id: 5,
    pais: "Reino Unido",
    url: "tJ21grjN6wU"},
    {id: 6,
    pais: "Irlanda",
    url: "ak5Fevs424Y"},
    {id: 7,
    pais: "Bélgica",
    url: "ORhEoS6d8e4"},
    {id: 8,
    pais: "Suecia",
    url: "b3vJfR81xO0"},
    {id: 9,
    pais: "Noruega",
    url: "CxNiUxdJnTQ"},
    {id: 10,
    pais: "Paises Bajos",
    url: "UOf-oKDlO6A"},
    {id: 11,
    pais: "Rumanía",
    url: "NRxv-AUCinQ"}
  ]
  
  return (
    <>
    <h1>Eurovisión 2023</h1>
    <ContextProvider>
      <ListaCancions cancions={cancions}/>
    </ContextProvider>
    </>
  );
}

export default App;
