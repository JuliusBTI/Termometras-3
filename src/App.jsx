import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  function decrementCount () {
    setCount(prevCount => prevCount -1)
}
function incrementCount() {
  setCount(prevCount => prevCount +1)
}

  return (
    <>
    
    <span className='count'>{count}{' C'}</span>
    <div className='button-conteiner'>
    <button className='plius' onClick={incrementCount}>+</button>
    <button className='minus' onClick={decrementCount}>-</button>
   
    </div>
    
   </>
  )
}

export default App
