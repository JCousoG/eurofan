import { Context } from "./contexto"
import Votar from "../vistas/votar"
import MostrarResultados from "../vistas/resultados"
import { useContext } from "react"

function Navegador() {

    const [store] = useContext(Context)
      
    return(
        <>      
       
    {store.vista === "Votar" &&   <Votar/>}
   
    {store.vista === "resultados" && <MostrarResultados/>}



  </>
    )
}
export default Navegador
