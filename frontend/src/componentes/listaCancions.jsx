import Cancion from './cancion'
function ListaCancions ({cancions}) {
return(
<>
    <ul>    
        
        {
                cancions.map(
                    cancion=> <Cancion key={cancion.id} cancions={cancion}  />
                   
                )
            }
            
    </ul>
          </>

    
    
)
}
export default ListaCancions