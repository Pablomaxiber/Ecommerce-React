import './item.css'
import {Link} from "react-router-dom"

const Item = ({names, img,}) => {
    return(
        <section className='itemCard'>
            
            <picture className='interior' >
                <img className='fotoArt' src= {img} alt={names}/>
            </picture>

            <h3 className='titArt, interior'>{names}</h3>
            <div className='interior'>
            {/*<Link to= {`/detail/${id}`} className='botonArt'>Ver detalle </Link> 
                <button className='botonArt'>Ver detalle</button> */}
            </div>
            
            
           
        </section>
    )
}

export default Item;