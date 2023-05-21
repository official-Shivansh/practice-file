import { ADD, REDUCE,GET_TODO_REQUEST,GET_TODO_FAILURE,GET_TODO_SUCCESS } from "./actionTypes"

export const addAction =(payload) => {
    return {type:ADD,payload}
}
export const reduceAction =(payload) => {
    return {type:REDUCE,payload}
}





export const getTodoRequestActions =()=>{
    return {type:GET_TODO_REQUEST}
}
export const getTodoSuccessActions =(payload)=>{
 return {type:GET_TODO_SUCCESS,payload}
}
export const getTodoFailureActions =()=>{
    return {type:GET_TODO_FAILURE}
}