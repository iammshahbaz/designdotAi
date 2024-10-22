import React, { useState } from 'react'
import "../App.css"

const Card = ({blog}) => {
    const [open , setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
    <h2>{blog.title}</h2>
    <button className='btn' onClick={() => setOpen(!open)}>{open ? 'Close' : 'Read More'}</button>
    {open && <p>{blog.content}</p>}
  </div>
  )
}

export default Card
