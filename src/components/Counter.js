import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {incriment, decriment, reset } from "../redux/counterSlice"

function Counter() {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    
  return (
    <div>
      <p> {count}</p>
      <button onClick={()=>dispatch(incriment())}>+</button>
      <button onClick={()=>dispatch(decriment())}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
     

    </div>
  );
}

export default Counter;
