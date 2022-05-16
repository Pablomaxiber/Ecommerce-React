import { useContext } from "react"
import CartContext from "../../context/CartContext"

const ItemCart = ({names, id, img, precio, quantity}) =>{

    const { removeItem } = useContext(CartContext)

    

return (
    <>
        <div>{img}</div>
        
        {names}  
        cantidad: {quantity} 
         Precio por unidad: ${precio}: 
         Total: ${quantity * precio} 
         <button onClick={() => removeItem(id)}>Eliminar </button>

    </>
)
}

export default ItemCart