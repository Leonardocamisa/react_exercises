import { CounterDisplay } from "./CounterDisplay";
import { UseCounter } from "./UseCounter";



export function ClickCounter({initialValue = 0}){
    const {initialV, onIncrement, onDecrement, onReset} = UseCounter(initialValue);

    return(
        <div>
            <CounterDisplay counter = {initialV} />
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
         </div>
    )
}