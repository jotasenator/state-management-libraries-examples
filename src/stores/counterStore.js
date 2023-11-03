import { create } from 'zustand';

const useCounterStore = ( set ) => ( {
    counter: 0,
    increment: () => set( state => ( { counter: state.counter + 1 } ), false, 'increment' ),
    decrement: () => set( state => ( { counter: state.counter - 1 } ), false, 'decrement' ),
    reset: () => set( state => ( { counter: 0 } ), false, 'reset' ),
} );

export default useCounterStore;