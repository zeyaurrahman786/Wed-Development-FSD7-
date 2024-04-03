import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("BHOPAL")


  function City (){
    setData(data="DELHI")
  }
  
  useEffect(()=>{
    fetch('https://dummyjson.com/products/1')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{

    })
  })

  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount(count+1)}>count is {count}</button> 

        <h1>{data}</h1>
      <button onClick={City}>Change</button>
      </div>

      
    </>
  )
}

export default App
