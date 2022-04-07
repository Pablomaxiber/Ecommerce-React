
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import Counter from './components/Counter/counter';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <header >
        {/*<BrowserRouter> 
         
          <div>
            <Link to='/list'>List</Link>
            <Link to='/detail'>Detalle</Link>
          </div>
  */}
              <NavBar />
    {/*
              <Routes>
                <Route path='/list' element={<ItemListContainer/>} />
                <Route path='/detail' element={<ItemListContainer/>} />
                 <Route path='*' element={<h1>NOT FOUND</>} />
              </Routes>

         </BrowserRouter> 
  */}
      <div>
        <ItemListContainer greeting = {"Bienvenidos a Candy Raven"}/>
      </div>



      <Counter initial={0} stock={10}/>
        
        <h2>Pablo Bermúdez </h2>
        
    </header>
    
  );
}

export default App;
