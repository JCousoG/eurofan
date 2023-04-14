import { useContext, useState, useEffect } from "react"
import { Context } from "./contexto"

function Voto({id, puntuacion}) {

    const [votoUsado, setVotoUsado ] = useState(false)

    const [ store, setStore ] = useContext(Context);
    useEffect(
        usarVoto,
        [store]
      )
      function usarVoto() {
    setVotoUsado( ! store.puntos.includes(puntuacion))
      }
    function manexadorVoto() {
        console.log("Asignados puntos:", puntuacion);
        const newStore = {...store}
        if (newStore.votos[id]) {newStore.puntos.push(newStore.votos[id])}
        newStore.votos[id] = puntuacion
        const puntoIndex = newStore.puntos.indexOf(puntuacion)
        newStore.puntos.splice(puntoIndex,1)
        setStore(newStore)
    }

    return(
        <>
        <button onClick={manexadorVoto} disabled={votoUsado}>{puntuacion}</button>
        </>
    )
}
export default Voto