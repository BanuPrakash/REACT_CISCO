import React from 'react'
import { useReducer } from 'react'
import countReducer from './countReducer'

let initialState = {
    count : 0
}
export default function ReducerHookComponent() {
 let [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
        Count { state.count} <br />
        <button type="button" 
            onClick={()=> dispatch({type:'INCREMENT', payload: 10})}>
                Increment
        </button>
        <button type="button" 
            onClick={()=> dispatch({type:'DECREMENT'})}>
                DECREMENT
        </button>
        <button type="button" 
            onClick={()=> dispatch({type:'RESET'})}>
                RESET
        </button>
    </div>
  )
}
