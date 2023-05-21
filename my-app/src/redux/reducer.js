import { ADD, GET_TODO_REQUEST,GET_TODO_FAILURE,GET_TODO_SUCCESS, REDUCE } from "./actionTypes";

export const reducer =(state,{type,payload}) =>{
    switch(type){
        case ADD:{
            return {...state, counter:state.counter + payload};
        }
        case REDUCE:{
            return {...state, counter:state.counter - payload};
        }
        case GET_TODO_REQUEST:{
            return {...state,isLoading:true,}
        }
        case GET_TODO_SUCCESS:{
            return {...state,isLoading:false,todos:payload}
        }
        case GET_TODO_FAILURE:{
                    return {...state,isLoading:false, isError:true}
                }
        default:
            return state;
    }
}