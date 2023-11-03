import { useBoundStore } from "../stores";


const Counter = () => {
    const counter = useBoundStore( state => state.counter );
    const increment = useBoundStore( state => state.increment );
    const decrement = useBoundStore( state => state.decrement );
    const reset = useBoundStore( state => state.reset );

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
