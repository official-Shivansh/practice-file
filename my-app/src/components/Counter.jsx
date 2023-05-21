import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addAction,reduceAction } from '../redux/action';
const Counter = () => {
    const count = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    const handleAdd =()=>{
      dispatch(addAction(1))
    }
    const handleReduce =()=>{
      dispatch(reduceAction(1))
    }
    return (
    <div>
      <h1>counter : {count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  )
}

export default Counter
