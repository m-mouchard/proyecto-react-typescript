import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [count, setCount] = useState(0);

  function pulsarBoton() {
    setCount(count+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        <br/>
        <br/>
        <Boton/>
        <Boton/>
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
    //Para que cada botón "Recuerde" su contador importamos la función useState de la librería de react import { useState } from 'react';
    //entonces ya podemos declarar la función useState que devuelve el estado actual "count" y la función para actualizar el estado setCount
    //Si movemos esta línea de código de abajo al componente App, el estado será igual para ambos botones. 
    //const [count, setCount] = useState(0);
    
    return(
      <div>
      <button onClick={pulsarBoton} className='botonPulsaAqui' >Pulsa aquí</button>
      <p>Vete a dormir por {count} vez</p>
      </div>
      );
    }
 
  
}

export default App;
