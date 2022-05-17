import { useState, useEffect }  from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb }  from '../../service/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({setCart, cart}) => {

    const [product, setProduct ]= useState()
    const [loading, setLoading] = useState(false)

    const { productId } = useParams()
    

    useEffect(() =>{
        {/*
        getProductsById(productId).then(item=>{
            setProduct(item)
        }).catch(err=>{
            console.log(err)

        }).finally(()=>{
            setLoading(false)

        })
       */}

        getDoc(doc(firestoreDb, 'products', productId)).then(response =>{
        
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        })

        return(() =>{
            setProduct()
        })

    }, [productId])

    if(loading){
        return(
            <h1> Cargando... </h1>
        )
    }
   
    return(
        <div>
         
               
              <ItemDetail {...product} setCart={setCart} cart={cart} /> 
              
               
            
        </div>
        
    )
}

export default ItemDetailContainer; 


