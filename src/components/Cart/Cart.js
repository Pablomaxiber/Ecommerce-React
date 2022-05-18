import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'
import ItemCart from "../ItemCart/ItemCart"



const Cart = () => {
    const { cart, totalCost, clearCart, getQuantity} = useContext(CartContext)


    if (getQuantity() === 0) {
        return (
        <>
        <h1>Tu carrito está vacío</h1>
        
        <Link  to="/"><button>
            <span>Volver al Inicio</span>
        </button>
        </Link>
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

                <div> <Link  to="/cart" onClick={() => clearCart()}><button>Vaciar carrito</button></Link></div>
                <div> <Link to="/Form"> <button > Finalizar compra </button></Link></div>

            </div>
           <div>
           <Link  to="/"> <button>Seguir Comprando </button> </Link>

           </div>
        </>
    )
    
    
}

export default Cart