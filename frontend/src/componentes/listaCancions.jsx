import Cancion from './cancion'
function ListaCancions ({cancions}) {
return(
    <ol>    
        
        {
                cancions.map(
                    cancion=> <Cancion key={cancion.id} cancions={cancion}  />
                   
                )
            }
            
    </ol>
    
)
}
export default ListaCancions