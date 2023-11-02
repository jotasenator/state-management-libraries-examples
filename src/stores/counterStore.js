import { observable, action } from "mobx";

const createCounterStore = () => {
    const store = observable( {
        count: 0,
        increment: action( 'increment', () => {
            store.count++;
        } ),
        reset: action( 'reset', () => {
            store.count = 0;
        } ),
        decrement: action( 'decrement', () => {
            store.count--;
        } )
    } );

    return store;
};
const store = createCounterStore();
export default store;
