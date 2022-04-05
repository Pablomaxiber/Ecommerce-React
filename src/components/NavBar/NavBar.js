import  './NavBar.css'
import CartWidgest from '../CartWidgets/CartWidgest'
import imagen from '../CartWidgets/carro.png'

const NavBar = () => {
    return(
        <nav className="NavBar">
            
               
           
            <div>
            <button className="botones"> Caramelos </button>
            <button className="botones"> Chocolates </button>
            <button className="botones"> Alfajores </button>
            </div>
            <div>
               
                <CartWidgest fotoCarro= {<img className='carrito' src={imagen}/>}> </CartWidgest>
                

            </div>
            
        </nav>
    )
}

export default NavBar