import Player from "./Player"
import Puntuacion from "./puntuacion"

function Cancion ({cancions}) {

    return(
        <label>

        <li><h2>{cancions.pais}</h2><div><Player id={cancions.url}></Player></div><Puntuacion form={cancions.id}></Puntuacion></li>
        </label>
    )
}
export default Cancion