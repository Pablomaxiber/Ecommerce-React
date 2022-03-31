import  './NavBar.css'
import CartWidgest from '../CartWidgets/CartWidgest'

const NavBar = () => {
    return(
        <nav className="NavBar">
            
               
           
            <div>
            <button className="botones"> Caramelos </button>
            <button className="botones"> Chocolates </button>
            <button className="botones"> Alfajores </button>
            </div>
            <div>
            <CartWidgest fotoCarro={<img src= "carro.png"/>}> </CartWidgest>
            4
            </div>
            
        </nav>
    )
}

export default NavBar