import  './NavBar.css'
import CartWidgest from '../CartWidgets/CartWidgest'
import imagen from '../CartWidgets/carro.png'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'
import { Link,  NavLink } from 'react-router-dom'


const NavBar = () => {
    
    const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])
  
    return(
        
        <nav className="NavBar">
         
          <div>
          <Link to='/'>
            <h3 className='nomEcom'>Ecommerce</h3>
            </Link>

          </div>
          { categories.map(cat => <NavLink  className="botones" key={cat.id} to={`/category/${cat.id}`}
          >{cat.description}</NavLink>)}
              
               
           
            <div>
      {/*   <NavLink to='/list' className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>List</NavLink>
            <NavLink to='/detalle' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Detail</NavLink>
    */ }
           
            </div>
            <div>
               
                <CartWidgest fotoCarro= {<img className='carrito' src={imagen}/>}> </CartWidgest>
                

            </div>
            
        </nav>
    )
}

export default NavBar