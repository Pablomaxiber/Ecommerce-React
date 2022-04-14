
import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import Counter from './components/Counter/counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import MLListContainer from './components/MLListContainer/MLListContainer';


const App = () => {
  const [show, setShow] =useState('list')

  return (

   
     <header >
        {/*<MLListContainer/> */}

       <div className='App'>
          <NavBar />
          <button onClick={()=> setShow('list')}>List</button>
          <button onClick={()=> setShow('detail')}>Detail</button>
          {show === 'list' ? <ItemListContainer greeting = {"Bienvenidos a Candy Raven"}/> : null}
          {show === 'detail' ? <ItemDetailContainer/> :null}   
        </div>
      


      <Counter initial={0} stock={10}  />
        
        <h2>Pablo Bermúdez </h2>
     
      
    </header>  
  
      ); 
}

export default App;
