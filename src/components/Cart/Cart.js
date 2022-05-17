import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'
import ItemCart from "../ItemCart/ItemCart"
import { writeBatch, getDocs, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase/index'


const Cart = () => {
    const { cart, totalCost, clearCart, getQuantity} = useContext(CartContext)
{/*
    const [loading, setLoading] = useState(false)

    const { cart, totalCost, clearCart, getQuantity} = useContext(CartContext)
    

    const createOrder = () =>{
            setLoading(true)
        const objOrder={
            items: cart,
            buyer: {
                name: 'Pablo',
                phone:'21321',
                email: 'sdsd@ds',
    
            },
            total: totalCost(),
            date : new Date()
        }

            const ids = cart.map(prod => prod.id)

            const batch = writeBatch(firestoreDb)

            const collectionRef = collection(firestoreDb, 'products')
            const outOfStock = []

            getDocs(query(collectionRef, where(documentId(), 'in', ids )))
            .then(response => {
                response.docs.forEach(doc =>{
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    }else {
                        outOfStock.push( {id: doc.id, dataDoc})
                    }
                })
            }).then(()=>{
                if(outOfStock.length === 0){
                    const collectionRef = collection(firestoreDb, 'orders')
                   return  addDoc(collectionRef, objOrder)

                }else {
                    return Promise.reject({name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                    batch.commit()
                    console.log(`Es el ${id} de la orden`)
            }).catch(error => {
                console.log(error)
            }).finally(()=>{
                setLoading(false)
            })
    }

    if(loading){
        return <h1>Se esta generando su orden</h1>
    }
*/}

    if (getQuantity() === 0) {
        return (
        <>
        <h1>Tu carrito está vacío</h1>
        
        <Link  to="/">Volver al  Inicio</Link>
        </>
        
        )
     }
    

    return (
        <>
        <h1>Carrito de Compras</h1>
        <div>   
            {cart.map (prod => <ItemCart key={prod.id}{...prod}/>)}         
        </div>
            <p> Total de la compra: ${totalCost()}</p>
            <div>

                <div> <Link  to="/cart" onClick={() => clearCart()}><button>Vaciar carrito</button></Link></div>
                <div> <Link to="/Form"> <button > Finalizar compra </button></Link></div>

            </div>
           <div>
           <Link  to="/"> <button>Seguir Comprando </button> </Link>

           </div>
        </>
    )
    
    
}

export default Cart