import { create } from 'zustand';

const useFetchStore = create( set => ( {
    data: [] || {},
    // fetch: ( url ) => {
    //     fetch( url )
    //         .then( ( response ) => response.json() )
    //         .then( ( json ) => {
    //             set( ( state ) => ( { data: json } ) );
    //         } );
    // },
    fetchData: async ( url ) => {
        const response = await fetch( url );
        const json = await response.json();

        set( state => ( { data: json } ) );
    }
} ) );

export default useFetchStore;