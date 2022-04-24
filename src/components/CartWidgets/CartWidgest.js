import {useContext} from 'react';
import { Link } from 'react-router-dom';



const CartWidgest= (props) => {
    
    return (
        <button className="botonCarrito">
            {props.fotoCarro}
        <p  className='cantProductos'> {0}</p>
        </button> 
    )
}

export default CartWidgest;