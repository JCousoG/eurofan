import micro from "../micro.jpg" 
import { useState, useContext } from "react"
import { Context } from "./contexto"
function FormularioRexistro () {
    const [store] = useContext(Context) 
    const [nome, setNome] = useState("")
    const [hashContrasinal, setHashContrasinal] = useState("")
    const [email, setCorreo]= useState("")
    function inicioSesion () {
        store.setVista("Login")
    }

    async function enviarNovoUsuario() {
        const usuario = { nome, hashContrasinal, email }
        try {
            const usuarioJSON = JSON.stringify(usuario)
            const resposta = await fetch(
                "http://localhost:8000/usuarios/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: usuarioJSON
                }
            )
            if (resposta.ok) {
            store.setVista("Login")}
            else { (alert("Ese nome xa está ocupado, proba a poñer outro nome"))}
            console.log(resposta);
        } catch (excepcion) {
            console.error(excepcion)
           
           
        }
    }


    return(
       <><h2>Rexistrate para poder votar</h2>
            <label>
                Nome:
                <input type="text" value={nome} onInput={(evento)=>{setNome(evento.target.value)}}/>
            </label>
            <label>
                Contrasinal:
                <input type="password" value={hashContrasinal} onInput={(evento)=>{setHashContrasinal(evento.target.value)}}/>
            </label>
            <label>
                Dirección de correo:
                <input type="email" value={email} onInput={(evento)=>{setCorreo(evento.target.value)}}/>
            </label>
            <button onClick={enviarNovoUsuario}>Enviar</button>
            <button onClick={inicioSesion}>Iniciar Sesión</button>
            <img src={micro} />
            </>
           
        
    )
}
export default FormularioRexistro