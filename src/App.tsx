import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        <br/>
        <br/>
        <Boton></Boton>
        <ListaCosas></ListaCosas>
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );

  function ListaCosas() {
    const products = [
      { title: 'Cabbage', id: 1 },
      { title: 'Garlic', id: 2 },
      { title: 'Apple', id: 3 },
    ];
    const listItems = products.map(product =>
      <li key={product.id}>
        {product.title}
      </li>
    );
    
    return (
      <ul>{listItems}</ul>
    );
  }
  
  function Boton() {
    const [count, setCount] = useState(0);
    function pulsarBoton() {
      alert(`Hola, vete a dormir por ${count} vez`);
      setCount(count+1);
    }
    return(
      <button onClick={pulsarBoton} className='botonPulsaAqui' >Pulsa aquí</button>
      );
    }
 
  
}

export default App;
