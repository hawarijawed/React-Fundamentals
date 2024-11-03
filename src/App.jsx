import { useState } from 'react'
import './App.css'

function App() {
  
  let [count, setCount] = useState(0)
  
  const addValue = ()=>{
    count = count+1;
    if(count <= 20){
      setCount(count);
    }
    
    // console.log("Value added");
  }

  const removeValue = () =>{
    count = count-1;
    if(count>= 0){
      setCount(count);
    }
  }
  return (
    <>
      <h1>Counter Tutorial</h1>
      <p>Counter value: {count}</p>
      <button onClick={addValue} style={{background:'blue', margin:'10px', width:'50%'}}>Add value</button>
      <br />
      <button onClick={removeValue} style={{background:'blue', margin:'10px', width:'50%'}}>Remove value</button>
    </>
  );
}

export default App
