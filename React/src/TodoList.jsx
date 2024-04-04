import React, { useState } from 'react'

const App = () => {
  const [input,SetInput]=useState()
  const [data,SetData]=useState([])
 
  const fun1=(e)=>{
    SetInput(e.target.value)

  }
  const add=()=>{
    SetData([...data,input])
    SetInput('')
  }
  return (
    <div>
      <input  name='input'  value={input} onChange={fun1} type='text' placeholder='Enter your todo'/>
      <button onClick={add}> add</button>
      {
        data.map((a,b,c)=>{
          return(<>
          <li> {a}</li>
          </>)

        })
      }
    </div>
  )
}

export default App