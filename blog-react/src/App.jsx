import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import { v4 as uuidv4 } from 'uuid';

function App() {

  var data = [
    {
      "heading" : "hello",
      "detail"  : "How are you",
      "key"     : uuidv4(),
      "from"    : [
                  {"role"    : "user",},
                  {"device"  : "computer",}
      ]
    },
    {
      "heading" : "Hi",
      "detail"  : "What about you",
      "key"     : uuidv4(),
      "from"    : [
                  {"role"    : "user",},
                  {"device"  : "computer",}
      ]
    },
    {
      "heading" : "bye",
      "detail"  : "See you",
      "key"     : uuidv4(),
      "from"    : [
                  {"role"    : "user",},
                  {"device"  : "computer",}
      ]
    }
  ]
  return (
    <>
      {data.map((data)=>{
        return(
          <Card key={data.key} heading={data.heading} detail={data.detail}/>
          (
              x.from.map((item) => {
                <div >
                  <h3>{item.role}</h3>
                  <p>{item.device}</p>
                </div>
              });
            
          )
        )
      })}
    </>
  )
}

export default App
