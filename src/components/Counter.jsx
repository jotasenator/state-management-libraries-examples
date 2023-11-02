import { useCounterStore } from "../stores";

const Counter = () => {
    const { counter, increment, decrement, reset } = useCounterStore();

    const handleIncrement = () => {
        return increment();
    };
    const handleReset = () => {
        if ( counter !== 0 ) {
            return reset();
        }
    };
    const handleDecrement = () => {
        return decrement();
    };

    return (
        <>
            <h1>Counter component using Zustand</h1>
            <p>{ counter }</p>
            <button onClick={ handleIncrement }>Increment</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleDecrement }>Decrement</button>
        </>
    );
};

export default Counter;
