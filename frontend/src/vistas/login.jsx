import micro from "../micro.jpg" 
import { useState, useContext } from "react"
import { Context } from "../componentes/contexto"


function Login () {
    const [store] = useContext(Context)
    const [nome, setNome] = useState("")
    const [contrasinal, setContrasinal] = useState("")
    function rexistrarse () {
        store.setVista("rexistro")
    }
    function iniciarSesion () {
        const datos = {nome, contrasinal}
        const datosJSON = JSON.stringify(datos)
        fetch( 
            "http://localhost:8000/login/",
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: datosJSON,
            }
            )
            .then(reaccionParaResposta)
            
            function reaccionParaResposta(resposta) { 
                if (resposta.ok) {
                    resposta.json()
                    .then(reaccionParaDatos)
                }
                if (resposta.status === 401) {
                    alert("Nome de usuario ou contrasinal incorrecto")
                }
                if ( resposta.status === 400 ) {
                    resposta.json()
                    .then(
                        fechaProximaVotacion => {
                            alert(`podes volver votar en ${new Date(fechaProximaVotacion)}`)
                        }
                    )
                }
            }
            function reaccionParaDatos(datos) {
                console.log(datos);
                localStorage.setItem("token", JSON.stringify(datos))
                const token = localStorage.getItem("token")
                store.setVista("Votar")
            }
            
            
        
        
}
    return (
        <>
        <label>
            Nome:
        <input type="text" value={nome} onInput={(evento)=>{setNome(evento.target.value)}}/>
        </label>
        <label>
            Contrasinal:
        <input type="password" value={contrasinal} onInput={(evento)=>{setContrasinal(evento.target.value)}}/>
        </label>
        <button onClick={iniciarSesion}>Login</button>
        <button onClick={rexistrarse}>Rexístrate</button>
        <img src={micro} />


        </>
    )
}
export default Login