import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useFetchStore = ( set ) => ( {
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

        set( state => ( { data: json } ), false, 'fetchData' );
    }
} );


export default useFetchStore;