
import CartContext from "../../context/CartContext"
import Cart from "../Cart/Cart"
import { useContext, useState } from "react"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase/index'
import { NavLink } from "react-router-dom"
import swal  from 'sweetalert'

const Form = () => {

    const [input, setInput] = useState({name: '', phone: '', address: '', mail: '', mailConfirm: '' })
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const { cart, totalCost, clearCart } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onBlurHandler = (event) =>  {
        if (input.mail === input.mailConfirm) {
            setButtonDisabled(false)
        } else {
            swal({
                title: "Algo paso...",
                text: "No coinicden las direcciones de mail",
                icon: "warning",
                dangerMode: true,
              })           
        }
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const createOrder = () => {
        setLoading(true)
    
        const objOrder = {
            prodOrder: cart.map(prod => { return ({ id: prod.id, name: prod.names, quantity: prod.quantity, priceUni: prod.precio }) }),
            buyer: {...input},
            total: totalCost(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                const orderId = id
                console.log(`El id de la orden es ${id}`)
                return setOrderId(orderId)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (orderId) {
        return (
            <>
           
                <div >
                    
                
                    <h2 >Compra exitosa {input.name}!</h2>
                    <p> Codigo de compra: {orderId}</p>
                    <div>
                        <NavLink to="/" onClick={() => clearCart()} >Volver al inicio</NavLink>
                    </div>
                </div>
            </>
        )
    }

    if (loading) {
        return <h1>Procesando compra</h1>
    }

    if (cart.length === 0) {
        return < Cart />
    }

    return (
        <>
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Ingresa tus datos</h2>
                    <div>
                        <div>
                            <div>
                                <label><input required  placeholder="Nombre y apellido" type='text' onChange={handleChange} name="name" value={input.name || ""} /></label>
                                <label><input required placeholder="Dirección de envío" type='text' onChange={handleChange} name="address" value={input.address || ""} /></label>
                                <label><input required placeholder="Teléfono" type="text" onChange={handleChange} name="phone" value={input.phone || ""} /></label>
                                <label><input required className={(input.mailConfirm === input.mail)} placeholder="Email" type='text' onChange={handleChange} name="mail" value={input.mail || ""} /></label>
                                <label><input required className={(input.mailConfirm === input.mail)} placeholder="Confirmar Mail" type='text' onChange={handleChange} onBlur={onBlurHandler} name="mailConfirm" value={input.mailConfirm || ""} /></label>
                                
                                <div>
                                    <button type="submit" onClick={() => createOrder()} className="finish" disabled={buttonDisabled}>Finalizar compra</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
            
        </>

    )
}

export default Form


{/*import { useState } from 'react'
 
const Form = () =>{
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }
    const handleKeyDown = (e) =>{
            console.log()
         {/*    if(e.code === 'Space'){
                e.preventDefault()
            }
                
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown} />
            <button type='submit'>submit</button>

        </form>
    ) 
}

export default Form   */}
  
    
        

