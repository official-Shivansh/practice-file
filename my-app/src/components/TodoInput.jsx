import React, { useState } from 'react'
import axios from 'axios'
const TodoInput = () => {
    const [title , setTitle] = useState("")
    const addTodoHandler = () =>{
        let newTodo = {
            title,
            status:false
        }

        axios.post("http://localhost:8080/todos", newTodo)
        .then((res)=>{
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
  return (
    <div>
      <input value={title} type="text" placeholder='Add Todo' onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={addTodoHandler}>Add Todo</button>
    </div>
  )
}

export default TodoInput

