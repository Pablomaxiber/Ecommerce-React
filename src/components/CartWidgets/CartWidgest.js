import { Link } from 'react-router-dom';
import './CartWidgest.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';


const CartWidgest= () => {

    const {getQuantity} = useContext(CartContext)
    
    return (  
    <div className="botonCarrito">
            <Link to="/cart">
        <img src="/images/carro.png" alt='cart' className='carrito'/>
        { getQuantity()}
        </Link>
    </div>
);
      
               
       
}

export default CartWidgest;