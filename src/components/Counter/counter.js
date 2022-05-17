import './counter.css'
import { useState } from 'react'


const Counter= ({ stock, initial=1, onAdd}) =>{
    
    const [count, setCount] = useState(initial); 
  
    const decrement= () =>{
        if (count > 0){
            setCount(count-1)
            
        }   
    }
    const increment= () => {
        if (count < stock){
            setCount(count +1)
        }
       
    }
    
    return (
        
        <div className='contador'>
          <div className='contadorIn'>
           <button className='botonContador' onClick={decrement}>-</button>
            <span className='numParraf'> {count} </span>
            <button className='botonContador' onClick={increment}>+</button>
          </div>
           
            <div> 
          <button class='botonArt' onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
           
        </div>
    )

}


export default Counter
