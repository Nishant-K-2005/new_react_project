import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  
  function addValue(){
    if(counter<20){
      setCounter(counter+1)
    }
  }
  function subValue(){
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (

    <div id='mainDiv'>
      <h1 id='counter'>Counter : <span id='counterValue'>{counter}</span></h1>
      <button id='add' onClick={addValue}>+ {counter}</button>
      <button id='sub' onClick={subValue}>- {counter}</button>
    </div>

  )
}

export default App
