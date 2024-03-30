import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Boton></Boton>
        <ListaCosas></ListaCosas>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
    function pulsarBoton() {
      alert("Hola, vete a dormir");
    }
    return(
      <button onClick={pulsarBoton} className='botonPulsaAqui' >Pulsa aquí</button>
    );
  }
    
}

export default App;
