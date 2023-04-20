import Resultado from "./resultado"

function MostrarResultado ({resultados}) {
    return(
        <ol>
            {
                resultados.map(
                    resultado=> <Resultado key={resultado.id} resultado={resultado}/>
                )
            }
            
        </ol>
    )
}
export default MostrarResultado