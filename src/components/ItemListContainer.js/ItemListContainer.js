import {useState, useEffect} from 'react'

import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { getProducts } from '../../service/firebase/firestore'


const ItemListContainer = (props) => {

    const [products, setProducts ]= useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} =useParams()

    useEffect(() =>{
        setLoading(true)
    
        getProducts(categoryId).then(products =>{
            setProducts(products)
        }).catch(error=>{
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })
    
    
    }, [categoryId])
    
   
    
    if(loading){
        return <h1>Cargando...</h1>
    }

    if(products.legth === 0){
        return <h1>No hay productos</h1>
    }
   

    return(
        <div>
    
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>

        </div>
        
    )
}

export default ItemListContainer;