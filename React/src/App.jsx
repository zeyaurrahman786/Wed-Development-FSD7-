// import React from 'react'
// import TodoList from './TodoList'
// import Form from './Form'
// import Card from './Card'
// import ComponentA from './ComponentA'

// function App() {
//   let data = 'Hello'
//   return (
//     <div>
//       {/* <TodoList/> */}
//       {/* <Form/> */}
//       {/* <Card/> */}
//       {/* <ComponentA a={data} /> */}
//     </div>
//   )
// }

// export default App








// import React from 'react'
// import Cart from './Cart'
// const App = () => {

//   return (
//     <div>
//      <Cart/> 
//     </div>
//   )
// }

// export default App










// import React, { useState } from 'react'
// import { useEffect } from 'react';
 

// const App = () => {
// let [data,setData]= useState([])

// useEffect(()=>{
//   fetch('https://dummyjson.com/recipes').then(response=>{

//   return response.json()
//   }).then(h => {
//     // Code to handle the data received
//     // console.log(h,"hhhhhhhhhhhhhhhhhhhhhh");
//     setData(h.recipes)
//   })
//   .catch(error => {
//     // Code to handle errors
//     console.error('There was a problem with the fetch operation:', error);
//   });
// },[])
 
// console.log(data);


//   return (
//     <>{
//     data.map(id=>{
//       return (
//         <div key={id}>
//           <h1>{id.id}</h1>
//           <h2>{id.name}</h2>
          
//         </div>
//       )
//     })
//   }
//     </>
//   )
// }

// export default App








import React from 'react'
import { useReducer } from 'react';

let reducer = (state, action) => {
  if(action.type === "incr"){
    return state + 1;
  }
  else if(action.type === "decr"){
    return state - 1;
  }
  return state;
}

const App = () => {

  let [state, dispatch] = useReducer(reducer,0)
  
  return (
    <div>
      <p>{state}</p>

      <button onClick={() => dispatch ({type : "incr"})}>Increment</button>
      <button onClick={() => dispatch ({type : "decr"})}>Decrement</button>
    </div>
  )
}

export default App;