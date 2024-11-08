// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Contact = () => {

    const {phone, name} = useContext(AppContext);

  return (
    <div>
        <h1>Contact</h1>
        <h3>Phone: {phone}</h3>
        <h3>Name: {name}</h3>
    </div>
  )
}

export default Contact