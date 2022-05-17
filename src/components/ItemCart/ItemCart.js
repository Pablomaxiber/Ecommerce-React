import { useContext } from "react"
import CartContext from "../../context/CartContext"

const ItemCart = ({names, id, precio, quantity}) =>{

    const { removeItem } = useContext(CartContext)

    

return (
    <div>
           
        <p> {names}  Cantidad: {quantity}  Precio por unidad: ${precio}  Total: ${quantity * precio} </p>
         
        <button onClick={() => removeItem(id)}>Eliminar </button>

    </div>
)
}

export default ItemCart