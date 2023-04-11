import './App.css';
import ListaCancions from './componentes/listaCancions';

function App() {
  const cancions = [
    {id: 0,
    pais: "España",
    url:"https://www.youtube.com/watch?v=3iZ43PJMy04"},
    {id: 1,
    pais: "Portugal",
    url: "https://www.youtube.com/watch?v=lvpDLq88cyo"},
    {id: 2,
    pais: "Francia",
    url: "https://www.youtube.com/watch?v=GWfbEFH9NvQ"},
    {id: 3,
    pais: "Alemania",
    url: "https://www.youtube.com/watch?v=Y12_YMs9kCQ"},
    {id: 4,
    pais: "Italia",
    url: "https://www.youtube.com/watch?v=N4HBDAbdXUg"},
    {id: 5,
    pais: "Reino Unido",
    url: "https://www.youtube.com/watch?v=tJ21grjN6wU"}
  ]

  
  return (
    <ListaCancions cancions={cancions}/>
  );
}

export default App;
