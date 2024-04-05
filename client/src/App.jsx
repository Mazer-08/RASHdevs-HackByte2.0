import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './features/testSlice'

function App() {

  const dispatch = useDispatch();
  const value = useSelector((state) => state.test.value);



  return (
    <>
      <p>{value}</p>
      <button onClick={()=>{dispatch(increment())}}>incremtn</button>
    </>
  )
}

export default App
