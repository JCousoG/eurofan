function Voto({id, puntuacion}) {

    function manexadorVoto() {
        
        fetch("...",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                puntucion: puntuacion
            })
        })        
    }

    return(
        <button onClick={manexadorVoto}>{puntuacion}</button>
    )
}
export default Voto