const CartWidgest= (props) => {
    
    console.log(props.fotoCarro)
    return (
        <button className="botonCarrito">
            {props.fotoCarro}
        <p  className='cantProductos'> 0</p>
        </button> 
    )
}

export default CartWidgest;