
import { useState } from 'react'
import './App.css'

function App() {
  const [input1,setInput1] = useState()
  const [input2,setInput2] = useState()

  const [result,setResult] = useState()
  const [operator,setOperator] = useState()
  const handler1 = (e) =>{
       setInput1(e.target.value)
  }
  
  const handler2 = (e) =>{
    setInput2(e.target.value)
  }

  const resetHandler = () =>{
      setInput1("");
      setInput2("");
      setResult();
      setOperator("+");
  }
  return (
    <> 
      <h1>Calculator</h1>
      <div>
      <input className='inputEle' type='number' value={input1} onChange={handler1} />
      <button>+</button>
      <input className='inputEle' type='number' value={input2} onChange={handler2}/>
      </div>

      <div className='buttons'>
           <button className='button'>+</button>
           <button className='button'>-</button>
           <button className='button'>*</button>
           <button className='button'>/</button>
      </div>

      <button className='resetButton' onClick={resetHandler}>Reset</button>

      <h1 className='result'>Result:{input1},{input2}</h1>

    </>
  )
}

export default App
