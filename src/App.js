
import { useState, createContext } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Form from './components/Form/Form';
import { CartContextProvider} from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider} from './components/Notification/Notification';


const App = () => {
 

  return (
     <header >
        {/*<MLListContainer/> */}

       <div className='App'>
        <NotificationProvider>
          <CartContextProvider > 
            <BrowserRouter>          
              <NavBar />             
                  <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/detalle/:productId' element={<ItemDetailContainer />}/>
                        <Route path= '*' element={<h1>NOT FOUND 404</h1>}/>
                        <Route path='/form' element={<Form/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                   </Routes>
            </BrowserRouter>
          </CartContextProvider> 

        </NotificationProvider>
        </div> 
      
     


   
        <footer class='footer'>
          <div>
          <h2>Pablo Bermúdez </h2>
          <span>Raven Ecommerce IT</span>
          </div>
        </footer>
        
     
      
    </header>  
  
      ); 
}

export default App;
