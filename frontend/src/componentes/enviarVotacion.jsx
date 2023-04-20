import { Context } from "./contexto"
import { useContext } from "react"
function EnviarVotacion() {
    const [store, setStore] = useContext(Context)
    function enviarVotos() {
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
          window.location.reload()
        }
  }
    return (
        <button type="submit" onClick={enviarVotos}>Votar</button>
    )
}
export default EnviarVotacion