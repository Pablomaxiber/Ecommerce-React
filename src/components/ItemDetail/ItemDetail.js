import './ItemDetail.css' 
import { useState, useContext } from 'react'
import Counter from '../Counter/counter'
import  CartContext  from '../../context/CartContext'
import NotificationContext from '../Notification/Notification'

   


const ItemDetail = ({id, names, precio, stock, description, category, img  }) =>{
    const [quantity, setQuantity] = useState(0) 
   
    const {addItem, getQuantityProduct} = useContext(CartContext)
    
    const { setNotification } = useContext(NotificationContext)

    const handleAdd = (count) => {
        setQuantity(count)
        const objProd = {
            id, names, precio
        }
        
        addItem({...objProd, quantity: count})
            setNotification('success', `Se agregaron ${count} ${names} correctamente`)
    }
     
    
    return (
        <section className='itemCard'>
            
        <picture className='interior' >
            <img className='fotoArt' src= {img} alt="foto"/>
        </picture>
       
        <h3 className='titArt, interior'>{names}</h3>
       
        <div className='interior'>
        <p>${precio} {description} {category} </p>
        </div>
        
            {
                stock > 0 ? <Counter initial={getQuantityProduct(id)} stock={stock} onAdd={handleAdd} /> :<span>Sin stock</span>
            }

     
       
    </section>
    )

}    

export default ItemDetail; 

