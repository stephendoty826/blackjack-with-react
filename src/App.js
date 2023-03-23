import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

const App = () => {

  const [number, setNumber] = useState(0)
  const [count, setCount] = useState(0)

  const incrementCountBy = (num) => {
    let number = parseInt(num)
    setCount(count + number)
  }


  return (
    <>
      <div>Count: {count}</div>
      Increment Count by:
      <input onChange={(e) => setNumber(e.target.value)}></input>
      <br/>
      {/* <Button onClick={() => incrementCountBy(number)} >Increment</Button> */}
      <Button onClick={() => setCount(count + parseInt(number))} >Increment</Button>
      <Button onClick={() => setCount(0)} variant="secondary">Reset</Button>

      <Button onClick={() => setCount(count - 1)} variant="danger">Decrement</Button>
    </>
    
  )
}

export default App