import { useSelector, useDispatch } from "react-redux";
import { inc, dec, incAmount, reset } from "./CounterSlice";

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className="border-2 border-gray-100 rounded-lg  bg-gray-200 bg-opacity-10 backdrop-blur-md shadow-lg">
      <div className="flex flex-col p-10">
        <div className="my-3 text-center text-3xl">
          <span >{count} </span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button className="btn btn-primary font-bold" onClick={()=>{dispatch(inc())}}>+</button>
          <button className="btn btn-secondary font-bold"  onClick={()=>{dispatch(dec())}}>-</button>
          <button className="btn btn-accent font-bold"  onClick={()=>{dispatch(incAmount(3))}}>+3</button>
          <button className="btn btn-error font-bold"  onClick={()=>{dispatch(reset())}}>C</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
