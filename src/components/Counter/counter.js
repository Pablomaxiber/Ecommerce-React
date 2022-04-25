import './counter.css'
import { useState } from 'react'
import {  Link } from 'react-router-dom'

const Counter= ({initial, stock}) =>{
    const [count, setCount] =useState(initial); 
    const [quantity, setQuantity] = useState(0)
   
    const decrement= () =>{
        if (count>0){
            setCount(count-1)
        }   
    }
    const increment= () => {
        if (count < stock)
       
        setCount(count +1)
    }
    
    const handleAdd = (count) =>{
        
        console.log(`Agregar al carrito ${count} unidades` )
        setQuantity(count)
       
    }
 


    return (
        
        <div className='contador'>
           <h3>Unidades</h3>
            <button className='botonContador' onClick={decrement}>-</button>
            <p className='numParraf'> {count} </p>
            <button className='botonContador' onClick={increment}>+</button>
            <div> 
            
               {quantity > 0 ? <p>Ir al carrito </p> : 
               <button className='botonContador' onClick={() => handleAdd(count)}>Agregar al carrito</button>}
            </div>
           
        </div>
    )

}


export default Counter
