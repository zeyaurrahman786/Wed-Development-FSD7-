// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Footer = () => {

    const {phone} = useContext(AppContext);

  return (
    <div>
        <h1>Footer</h1>
        <h3>Phone: {phone}</h3>
    </div>
  )
}

export default Footer