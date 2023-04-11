import ReactPlayer from 'react-player'
function ListaCancions ({cancions}) {
return(
    <ol>
            {
                cancions.map(
                    cancion=> <ReactPlayer key={cancion.id} url={cancion.url}  />
                )
            }
            
        </ol>
    
)
}
export default ListaCancions