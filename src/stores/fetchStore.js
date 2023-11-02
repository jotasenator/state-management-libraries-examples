import { observable, action, runInAction } from "mobx";

const createFetchStore = () => {
    const store = observable( {
        data: [] || {},
        // fetch: 'fetch',action((url) => {
        //   fetch(url)
        //     .then((response) => response.json())
        //     .then((json) => {
        //       runInAction(() => {
        //         store.data = json;
        //       });
        //     });
        // })
        fetch: action( 'fetch', async ( url ) => {
            const response = await fetch( url );
            const json = await response.json();
            // runInAction( () => {
            //     store.data = json;
            // } );
            action( 'update data', () => {
                store.data = json;
            } )();
        } )
    } );


    return store;
};

const store = createFetchStore();
export default store;
