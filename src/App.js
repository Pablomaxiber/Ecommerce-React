
import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import Counter from './components/Counter/counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import MLListContainer from './components/MLListContainer/MLListContainer';
import Form from './components/Form/Form';

const App = () => {

 // const [show, setShow] =useState('list')


  const handleAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (

   
     <header >
        {/*<MLListContainer/> */}

       <div className='App'>

     
          {/*  <div>
         <button onClick={()=> setShow('list')}>List</button>
          <button onClick={()=> setShow('detail')}>Detail</button>
          </div>
          {show === 'list' ? <ItemListContainer greeting = {"Bienvenidos a Candy Raven"}/> : null}
          {show === 'detail' ? <ItemDetailContainer/> : null}    */}

        <BrowserRouter>
              <NavBar />
              <Link to='/form' className='botonArt' > Form </Link>
            
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/detalle/:productId' element={<ItemDetailContainer/>}/>
                <Route path= '*' element={<h1>NOT FOUND 404</h1>}/>
                <Route path='/form' element={<Form/>}/>
              </Routes>
        </BrowserRouter>
        </div> 
      
     


      <Counter initial={1} stock={10} onAdd={handleAdd} />
        
        <h2>Pablo Bermúdez </h2>
     
      
    </header>  
  
      ); 
}

export default App;
