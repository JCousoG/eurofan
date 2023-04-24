import { Context } from "./contexto"
import { useContext } from "react"
function EnviarVotacion() {
    const [store] = useContext(Context)
    function enviarVotos() {
      console.log(store);
      if (store.puntos.length === 0)
      {   
        fetch(
            "http://localhost:8000/cancions/",
            {
              method: "PUT",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(store.votos)
            }
          )
          store.setVista("resultados")
        }
  }
    return (
      <>
      <button className="btn-flotante" type="submit" onClick={enviarVotos}>Votar</button>
      </>
    )
}
export default EnviarVotacion