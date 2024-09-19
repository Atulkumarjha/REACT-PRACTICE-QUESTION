//SIMPLE TO-DO LIST WITH SIMPLE ADD AND REMOVE FUNCTIONALTY
import React, { useState } from 'react'

const Eight = () => {


    const[input,setInput] = useState('');
    const[todos,setTodos] = useState([]);

    const addTodo = () => {
        if(input.trim() !== ''){
            setTodos([...todos,input]);
            setInput('');
        }
    }

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_,i) => i!==index);
        setTodos(updatedTodos);
    }
  return (
    <div>
      <input type='text' onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo,index)=>(
            <li key={index}>
                {todo}  
            <button onClick={()=>removeTodo(index)}>remove</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Eight
