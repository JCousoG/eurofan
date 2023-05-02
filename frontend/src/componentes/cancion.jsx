import Player from "./Player"
import Puntuacion from "./puntuacion"
import cargando from "../cargando.gif"

function Cancion ({cancions}) {

    return(
        <label>

        <li><h2>{cancions.pais}</h2><div style={{backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundImage: `url(${cargando})`}}><Player id={cancions.url}></Player></div><Puntuacion form={cancions.id}></Puntuacion></li>
        </label>
    )
}
export default Cancion