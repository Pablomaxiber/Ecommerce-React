import './counter.css'
import { useState } from 'react'

const Counter= ({initial, stock ,onAdd}) =>{
    const [count, setCount] =useState(initial); 

  


    const decrement= () =>{
        if (count>0){
            setCount(count-1)
        }
       
    }

    const increment= () => {
        if (count < stock)
        setCount(count +1)
    }
    console.log(setCount)

    return (
        
        <div className='contador'>
           <h3>Unidades</h3>
            <button className='botonContador' onClick={decrement}>-</button>
            <p className='numParraf'> {count} </p>
            <button className='botonContador' onClick={increment}>+</button>
            <div> 
                <button className='botonContador' oneClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
           
        </div>
    )

}


export default Counter
