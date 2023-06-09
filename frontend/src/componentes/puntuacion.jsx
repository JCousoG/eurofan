import Voto from "./Voto.jsx"
import { useContext } from "react";
import { Context } from "./contexto"

function Puntuacion ({form}) {
    const [ store ] = useContext(Context);
    const votosQueTen = store.votos[form]
    return (
        <>
       

        <Voto id={form} puntuacion={1}/>
        <Voto id={form} puntuacion={2}/>
        <Voto id={form} puntuacion={3}/>
        <Voto id={form} puntuacion={4}/>
        <Voto id={form} puntuacion={5}/>
        <Voto id={form} puntuacion={6}/>
        <Voto id={form} puntuacion={7}/>
        <Voto id={form} puntuacion={8}/>
        <Voto id={form} puntuacion={10}/>
        <Voto id={form} puntuacion={12}/>
        <h3>Le has dado {votosQueTen} puntos</h3>
        </>
    )
}
export default Puntuacion