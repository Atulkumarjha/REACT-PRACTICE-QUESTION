//CREATE A COMPONENT IN WHICH ON CLICK BACKGORUND COLOR CHANGES
import React from 'react'
import {useState} from 'react'

const Nine = () => {

    const[backgroundColor, setBackgroundColor] = useState('');

    const handleClick = () => {
        const color = backgroundColor === 'red' ? 'blue' : 'red';
        setBackgroundColor(color);
    }
  return (
    <div onClick={handleClick} 
    style={{
        backgroundColor,
        width: '1000px',
        height: '500px',
        cursor: 'pointer',
    }}
    >
      CLICK ME TO CHANGE THE COLOR
    </div>
  )
}

export default Nine
