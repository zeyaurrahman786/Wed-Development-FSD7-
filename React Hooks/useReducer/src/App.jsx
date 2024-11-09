import { useState } from 'react'
import './App.css'
import { useReducer } from 'react'

function App() {

  const initialState = { count: 0 }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase': {
        return { count: state.count + 1 }
      }
      case 'decrease': {
        return { count: state.count - 1 }
      }
      default: {
        return state
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increase' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>Decrement</button>
    </>
  )
}

export default App;
