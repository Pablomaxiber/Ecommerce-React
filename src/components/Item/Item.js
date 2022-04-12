import './item.css'
import {Link} from "react-router-dom"

const Item = ({id, name, img, precio, detalle}) => {
    return(
        <section className='itemCard'>
            
            <picture className='interior' >
                <img className='fotoArt' src= {img} alt={name}/>
            </picture>

            <h3 className='titArt, interior'>{name}</h3>
            <div className='interior'>
            {/*<Link to= {`/detail/${id}`} className='botonArt'>Ver detalle </Link> */}

            </div>
            
            
           
        </section>
    )
}

export default Item;