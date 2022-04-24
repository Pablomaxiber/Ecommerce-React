import './ItemDetail.css' 

const ItemDetail = ({id, names, precio, description, category, img}) =>{
    return (
        <section className='itemCard'>
            
        <picture className='interior' >
            <img className='fotoArt' src= {img} alt="foto"/>
        </picture>

        <h3 className='titArt, interior'>{names}</h3>
        <div className='interior'>
        <p>{precio} {description} {category} </p>
           
        </div>
        
        
       
    </section>
    )

}    

export default ItemDetail; 

