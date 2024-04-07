import React from 'react'
import ComponentB from './ComponentB'

function ComponentA(dolly) {
    console.log(dolly,"Dolly Chai Wala");
  return (
    <div>
        <ComponentB b={dolly.a} />
    </div>
  )
}

export default ComponentA