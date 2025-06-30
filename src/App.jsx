import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-amber-900'>Vite + React</h1>
      <button class="btn btn-neutral">Neutral</button>
    </>
  )
}

export default App
