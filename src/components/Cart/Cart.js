import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'
import ItemCart from "../ItemCart/ItemCart"



const Cart = () => {

    const { cart, totalCost, clearCart } = useContext(CartContext)
    
    if(cart.length === 0) {
        return (
            <>
            <h1>Tu carrito está vacío</h1>
            
            <Link  to="/">Volver al  Inicio</Link>
            </>
            
        )
    }

    return (
        <>
        <h1>Carrito de Compras</h1>
        <div>   
            {cart.map (prod => <ItemCart key={prod.id}{...prod}/>)}         
        </div>
            <p> Total de la compra: ${totalCost()}</p>
            <div>
            <Link  to="/cart" onClick={() => clearCart()}> Vaciar carrito</Link>

            </div>
           <div>
           <Link  to="/">  Seguir Comprando </Link>

           </div>
        </>
    )
    
    
}

export default Cart