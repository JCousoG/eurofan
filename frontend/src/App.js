import './App.css';
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
    url: "tJ21grjN6wU"}
  ]
  
  return (
    <>
    <h1>Eurovisión 2023</h1>
    <ListaCancions cancions={cancions}/>
    </>
  );
}

export default App;
