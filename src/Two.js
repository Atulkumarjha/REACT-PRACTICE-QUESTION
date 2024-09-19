//CREATE A COMPONENT FOR COUNTER
import React from 'react'

export default function Two ()  {


    const [count,setCount] = React.useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>+</button>
      <span>{count}</span>
      <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

 
