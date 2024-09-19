//CREATE COMPONENT WHICH RENDER THE LIST OF ITEMS
import React from 'react'

const Four = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
  return (
    <div>
      <ul>
        {items.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default Four
