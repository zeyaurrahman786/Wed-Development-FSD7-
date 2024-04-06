import React, { useState } from 'react'

function Form() {
    let [input,SetInput] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Password: ''
    })

    function fun1(e){
        let { name, value } = e.target;
        SetInput({...input, [name]:value})
      
      }
    
    const fun2=(e)=>{
        e.preventDefault();
        console.log(input);
    }
    
  return (
    <div>
        <form onSubmit={fun2}>
            <input type="text" onChange={fun1} value={input.FirstName} name = 'FirstName' placeholder='Enter FirstName' />
            <br />
            <br />
            <input type="text" onChange={fun1} value={input.LastName} name = 'LastName' placeholder='Enter LastName' />
            <br />
            <br />
            <input type="email" onChange={fun1} value={input.Email} name = 'Email' placeholder='Enter Your Email' />
            <br />
            <br />
            <input type="password" onChange={fun1} value={input.Password} name = 'Password' placeholder='Enter Password' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form