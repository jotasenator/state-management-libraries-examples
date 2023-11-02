import { counterStore } from "../stores";
import { observer } from "mobx-react-lite";

const Counter = () => {
    const handleIncrement = () => {
        counterStore.increment();
    };
    const handleReset = () => {
        if ( counterStore.count !== 0 ) {
            counterStore.reset();
        }
    };
    const handleDecrement = () => {
        counterStore.decrement();
    };

    return (
        <>
            <h1>Counter component using Mobx</h1>
            <p>{ counterStore.count }</p>
            <button onClick={ handleIncrement }>Increment</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleDecrement }>Decrement</button>
        </>
    );
};

export default observer( Counter );
