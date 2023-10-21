import { useState } from 'react';
import './App.css'

function App() {

  // let counter = 5;
  let [counter, setCounter]= useState(15);

  const addValue = () => {
    counter = counter < 21 ? counter + 1 : 20;
    setCounter(counter)
    console.log("clicked", counter);
    // console.log("value added", Math.random());
  }

  const subtractValue = () => {
    counter = counter > 0 ? counter - 1 : 0;
    setCounter(counter)
    console.log("clicked", counter);
    // console.log("value subtracted", Math.random());
  }

  return (
    <>
      <h1>Chai aur react with PJ</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>

      <br/>
      
      <button
      onClick={subtractValue}
      >Subtract Value {counter}</button>
    </>
  )
}

export default App
