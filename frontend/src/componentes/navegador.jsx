import { Context } from "./contexto"
import Votar from "../vistas/votar"
import MostrarResultados from "../vistas/resultados"
import { useContext } from "react"
import Login from "../vistas/login"
import FormularioRexistro from "./formularioRexistro"

function Navegador() {

    const [store] = useContext(Context)
      
    return(
        <>      
    {store.vista === "Login" && <Login/>}   
    {store.vista === "Votar" &&   <Votar/>}
    {store.vista === "rexistro" && <FormularioRexistro/>}
    {store.vista === "resultados" && <MostrarResultados/>}



  </>
    )
}
export default Navegador
