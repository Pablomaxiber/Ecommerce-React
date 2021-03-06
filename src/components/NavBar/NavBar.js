import  './NavBar.css'
import CartWidgest from '../CartWidgets/CartWidgest'
import { useState, useEffect } from 'react'
import { Link,  NavLink } from 'react-router-dom'
import { firestoreDb } from '../../service/firebase'
import { getDocs, collection } from 'firebase/firestore'

const NavBar = () => {
    
    const [categories, setCategories] = useState([])

  useEffect(() => {
    

    getDocs(collection(firestoreDb, 'categories')).then(response =>{
      const categories = response.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
      })
      setCategories(categories)
    })


  }, [])
  
    return(
        
        <nav className="NavBar">
         
          <div>
                <Link to='/'><h3 className='nomEcom'>Candy Raven</h3></Link>
            
          </div>
          
          { categories.map(cat => <NavLink  className="botones" key={cat.id} to={`/category/${cat.id}`}
          >{cat.description}</NavLink>)}
              <CartWidgest/> 
   
            
        </nav>
    )
}

export default NavBar