//CREATE COMPONENT WHICH TAKE INPUT AND SHOW IT
import React from 'react'

const Three = () => {
  const [input,setInput] = React.useState('');
  return (
    <div>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <p>USER INPUT:{input}</p>
    </div>
  )
}

export default Three
