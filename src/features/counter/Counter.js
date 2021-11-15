import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, dicrement } from "./CounterSlicer"


const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button 
        onClick={() => dispatch(dicrement())}>
        -
        </button>
      <span>
        { count }
      </span>
      <button
        onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  )
}
export default Counter;
