
import { useState } from 'react'
import './App.css'

function App() {
  const [input1,setInput1] = useState()
  const [input2,setInput2] = useState()

  const [result,setResult] = useState()
  const [operator,setOperator] = useState("+")
  const [count,setCount] = useState(0)



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

  
  const plusOperator = () =>{
    setCount(count+1);
    setOperator("+");
    setResult(parseInt(input1)+parseInt(input2))
  }

  const minusOperator = () =>{
    setCount(count+1);
    setOperator("-")
    setResult(input1-input2)
  }

  const multiplyOperator = () =>{
    setCount(count+1);
    setOperator("*");
    setResult(input1*input2)
  }
  const divideOperator = () =>{
    setCount(count+1);
    setOperator("/")
    setResult(input1/input2)
  }
  
  return (
    <> 
      <h1>Calculator</h1>
      <div>
      <h1>Number of Operations:{count}</h1>
      <input className='inputEle' type='number' value={input1} onChange={handler1} />
      <button>{operator}</button>
      <input className='inputEle' type='number' value={input2} onChange={handler2}/>
      </div>

      <div className='buttons'>
           <button className='button' onClick={plusOperator}>+</button>
           <button className='button' onClick={minusOperator}>-</button>
           <button className='button' onClick={multiplyOperator}>*</button>
           <button className='button' onClick={divideOperator}>/</button>
      </div>

      <button className='resetButton' onClick={resetHandler}>Reset</button>

      <h1 className='result'>Result:{result}</h1>

    </>
  )
}

export default App
