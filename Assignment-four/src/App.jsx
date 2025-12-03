import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/Users'
import useFetch from './custom-hooks/useFetch'

function App() {

  let {data,isLoading,error} = useFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <>
      <div className="container">
        <h1 className="title">Users Management App</h1>
        {isLoading && <p className={"title"}>Please wait your data is loading</p>}
        {error && <p className={"title"}>{error}</p>}
        {!error && !isLoading && <Users users={data}/>}
      </div>
    </>
  )
}

export default App
