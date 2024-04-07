import React, { useEffect, useState } from 'react'
const App = () => {
  let [input,SetInput]=useState({
    FirstName:"",
    LastName:"",
    Email:"",
    Password:""
  })

  let [data,SetData]=useState(null)
    useEffect(()=>{
      let val=   localStorage.getItem('data')
      let newData=   JSON.parse(val)
      console.log(newData,"rrr");
      SetData(newData)
    },[])

  function fun1(e){
    let {name,value}=e.target
    SetInput({...input, [name]:value})
  }

function chalaja(e){
  e.preventDefault();
  console.log(input);
  let a=  JSON.stringify(input)
  localStorage.setItem('data',a) 
}

function remove(){
  localStorage.clear('data')
  SetData(null)
}

  return (
    <div>
      <form onSubmit={chalaja}>
        <input type='text' onChange={fun1}  name='FirstName'  value={input.firstName} placeholder='Enter your FirstName'/>
        <br/>
        <br/>
        <input type='text' onChange={fun1} name='LastName'  value={input.lastName}  placeholder='Enter your LastName'/>
        <br/>
        <br/>
        <input type='email' onChange={fun1} name='Email'  value={input.email} placeholder='Enter your Email'/>
        <br/>
        <br/>
        <input type='password' onChange={fun1} name='Password' value={input.password} placeholder='Enter your PassWord'/>
        <br/>
        <br/>
        <button type='submit'>Submit</button>

      </form>

      {
        data?(<>
        <h1> {data.firstName}</h1>
        <h4>   {data.lastName}</h4>
        <h4>  {data.email}</h4>
        </>):(<> <h2>Kuch Nahi Mila</h2> </>)
      }

      <button onClick={remove}>Delete</button>

    </div>
  )
}

export default App