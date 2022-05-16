import './item.css'
import {Link} from "react-router-dom"


const Item = ({id, names, img, precio, stock}) => {
    
  {/*   const handleClick = (e) =>{
        e.stopPropagation()
        console.log('Hice click en Item')
    }
 
    */}
   
    return(
        <section className='itemCard' >
            
            <picture className='interior' >
                <img className='fotoArt' src= {img} alt={names}/>
            </picture>

            <h3 className='titArt, interior'>{names}</h3>
            <h2>${precio} </h2>
            <div className='interior'>
            
            <Link to= {`/detalle/${id}`} className='botonArt'>Ver detalle </Link> 
            
            </div>
            
            
           
        </section>
    )
}

export default Item;