import './item.css'
const Item = ({name, img}) => {
    return(
        <section className='itemCard'>
            
            <picture className='interior' >
                <img className='fotoArt' src= {img} alt={name}/>
            </picture>

            <h3 className='titArt, interior'>{name}</h3>
            <div className='interior'>
            <button className='botonArt'>Ver detalle </button>

            </div>
            
            
           
        </section>
    )
}

export default Item;