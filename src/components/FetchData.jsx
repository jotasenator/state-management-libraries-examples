import { Suspense, useEffect } from "react";

import RenderArrayData from "./RenderArrayData";
import RenderObjectData from "./RenderObjectData";
import { useBoundStore } from "../stores";



const FetchData = ( { url } ) => {
    const data = useBoundStore( state => state.data );
    const fetchData = useBoundStore( state => state.fetchData );



    // useEffect( () => {
    //     fetchData( url );
    // }, [] );

    const isArrayOrObject = () => {

        if ( typeof data === "object" && !Array.isArray( data ) ) {
            return "object";
        } else {
            return "array";
        }
    };

    const arrayOrObject = isArrayOrObject();

    return (
        <Suspense fallback={ <div>Loading...</div> }>
            <h2>Fetching data through Zustand from jsonplaceholder</h2>
            <button onClick={ () => fetchData( url ) }>Re fetch</button>

            { arrayOrObject === "array" ? <RenderArrayData /> : "" }

            { arrayOrObject === "object" ? <RenderObjectData /> : "" }
        </Suspense>
    );
};

export default FetchData;
