import { useContext, useState, useEffect } from "react"
import { Context } from "./contexto"

function Voto({id, puntuacion}) {

  const [ store, setStore ] = useContext(Context);

    const [votoUsado, setVotoUsado ] = useState(false)
    const [sonOVotoAsignado, setSonOVoto] = useState(store.votos[id] === puntuacion)

    useEffect(
        usarVoto,
        [store]
      )
      function usarVoto() {
        setVotoUsado(
          store.puntos.includes(puntuacion) ? false : true
        )
      }
    function manexadorVoto() {
        console.log("Asignados puntos:", puntuacion);
        const newStore = {...store}
        if (newStore.votos[id] > 0) {newStore.puntos.push(newStore.votos[id])}
        newStore.votos[id] = puntuacion
        const puntoIndex = newStore.puntos.indexOf(puntuacion)
        newStore.puntos.splice(puntoIndex,1)
        setStore(newStore)
    }

    return(
        <>
        <button className={sonOVotoAsignado ? "seleccionado" : ""} onClick={manexadorVoto} disabled={votoUsado}>{puntuacion}</button>
        </>
    )
}
export default Voto