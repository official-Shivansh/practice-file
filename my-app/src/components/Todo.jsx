import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { getTodoFailureActions, getTodoRequestActions, getTodoSuccessActions } from '../redux/action';

const Todo = () => {
 const todos = useSelector(store=>store.todos);
 const dispatch = useDispatch();
 const getTodos = ()=>{
    dispatch(getTodoRequestActions())
    axios.get("http://localhost:8080/todos")
    .then((res)=>{
        console.log(res)
        dispatch(getTodoSuccessActions(res.data))
    }).catch((err)=>{
        console.log(err)
        dispatch(getTodoFailureActions())
    })
 }
 useEffect(()=>{
   getTodos();
 },[])

  return (
    <div>
      <TodoInput/>
      {
        todos.length>0 && todos.map((el)=>{
            return <div key={el.id}>
                <h1>{el.title}-----{el.status?"true":"false"}</h1>
            </div>
        })
      }
    </div>
  )
}

export default Todo
