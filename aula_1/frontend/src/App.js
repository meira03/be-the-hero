import React, {useState} from 'react';
import Routes from './routes';
import './global.css'

// JSX(java script + xml ) esse é - programar HTML dentro do javascript
//componente - função que retorna html no react
function App() {
  const [counter, setCounter] = useState(0);

  //Array [valor,funçãoDeAtualização]

function increment(){
  setCounter(counter + 1);
}
 
  return (
      <Routes />
  );
}



export default App;
