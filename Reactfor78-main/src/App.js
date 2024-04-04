import React, { useState } from 'react'

function App()
{

  const [input,SetInput] = useState()
  const [data,SetData] = useState([])

  const fun1=(e)=>{
    SetInput(e.target.value)
  }

  const add=()=>{
    SetData([...data,input])
    SetInput('')

  }

  function delete(id){
    let newArray = data.filter((val,index)=>{
      return index!=id
    })
    SetData(newArray)

  }

  return (
    <div>
    <input name='input' value={input} onChange={fun1} type='text' placeholder='Enter Your Name' />
    <button onClick={add}>Add</button>
    {
      data.map((a,b,c)=>{
        return (<>
        <li>{a}</li>
      <button onClick={delete}>Delete</button>
        </>)
      })
    }
    </div>
  )
}

export default App