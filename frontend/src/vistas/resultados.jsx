import { useState, useEffect } from "react";
import MostrarResultado from "../componentes/mostrarResultado";

function MostrarResultados () {
    const [resultados, setResultados] = useState([])
    function manexadorBoton () {
    
      window.location.reload()
    }

    useEffect(
        obterResultados,
        []
      )
     
     
      function obterResultados(){
        fetch("http://localhost:8000/cancions/")
        .then(reaccionParaResposta)
        .catch(reaccionErroResposta)
      }
    
      function reaccionParaResposta(resposta){
        resposta.json().then(reaccionParaResultados)
      }
      function reaccionErroResposta(erro) {
        alert("Estamos tendo problemas coa conexión neste momento, probe a intentalo máis tarde")
        console.error(erro);
      }
    
      function reaccionParaResultados(novosDatos){
        setResultados(novosDatos)
      }

      return(
        <>
         <button onClick={manexadorBoton}>Recarga a páxina</button>
        <h2>Clasificación</h2>
      <MostrarResultado resultados={resultados}/>
      </>
      
      )
    }
    export default MostrarResultados