import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) =>{
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else {
            const newProducts = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const newProduct ={
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                }else{
                    return prod
                }
            })
            setCart(newProducts)
        }
    
    }

    const getQuantity= () =>{
        let count = 0
        cart.forEach(prod =>{
            count += prod.quantity
        })
        return count
    }

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }
    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }
    const getQuantityProduct = (id) => {
        return cart.find(prod => prod.id ===id)?.quantity
    }

    const totalCost = () =>{
        let compTotal = 0
        cart.forEach(prod => {
            compTotal += prod.quantity * prod.precio
        })
        return compTotal
    }
    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem,
            getQuantityProduct,
            totalCost,
            
        }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext