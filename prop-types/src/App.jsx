import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0);

  console.warn("User component rendered");

  return (
    <>
      <User name="Sajid" age='kk' className={11} student='kk'/>
    </>
  )
}

export default App
