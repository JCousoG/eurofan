import { useState } from "react"
function FormularioRexistro () {
    const [nome, setNome] = useState("")
    const [hashContrasinal, setHashContrasinal] = useState("")
    const [email, setCorreo]= useState("")

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
            console.log(resposta);
        } catch (excepcion) {
            console.error(excepcion)
            alert(excepcion)
        }
    }


    return(
       <>
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
            </>
           
        
    )
}
export default FormularioRexistro