import './App.css'
import { Child } from './components/Child'

function App() {

  let handleCount = (x) => {
    console.log(x)
  }  

  return (
    <>
      <Child onTrigger={handleCount} />
    </>
  )
}

export default App
