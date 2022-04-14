
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import {getProductsById} from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [products, setProducts ]= useState([])
    const [loading, setLoading] =(true)

    

    useEffect(() =>{
        getProductsById(1).them(item=>{
            setProducts(item)
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })
        return(() =>{
            setProducts()
        })
    }, [])
   
    return(
        <div >
          <h1>Detalle</h1>

        </div>
        
    )
}

export default ItemDetailContainer; 


