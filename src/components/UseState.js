import React from 'react'
import { useState } from 'react'

function UseState() {
    const[count,setCount]=useState(0);
    function decrementCount(){
        setCount(count=>count-1)
    }
    function incrementCount(){
        setCount(count=>count+1)
    }
  return (
    <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default UseState