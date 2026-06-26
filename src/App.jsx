import { useState } from 'react'
import Navbar from './components/navbar'
import Herosection from './components/herosection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Herosection/>  
    </>
  )
}

export default App
