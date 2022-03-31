import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';



function App() {
  return (
    <header >
    
      <div>

       <ItemListContainer greeting = {"Bienvenidos a Candy Raven"}/>
      </div>
    
     
         
      <NavBar />
        
        <h2>Pablo Bermúdez </h2>
        
    </header>
    
  );
}

export default App;
