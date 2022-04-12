
import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import Counter from './components/Counter/counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';



const App = () => {
  return (
    <header >
      <NavBar />
      {/* 
        <BrowserRouter> 
         
     
              
    
              <Routes>
                <Route path= '/' element={<ItemListContainer />} />
                <Route path= '/category/:category' element={<ItemListContainer/>} />
                <Route path='/detail/:product.Id' element={<ItemDetailContainer/>} />
                <Route path= '*' element={<h1>NOT FOUND 404</h1>} />
              </Routes>

         </BrowserRouter> 
  */}

      <div>
        <ItemListContainer greeting = {"Bienvenidos a Candy Raven"}/>


        {/* <ItemDetailContainer/> */}
      </div>
      


      <Counter initial={0} stock={10}/>
        
        <h2>Pablo Bermúdez </h2>
        
    </header>
    
  );
}

export default App;
