import { Suspense, useEffect } from "react";

import RenderArrayData from "./RenderArrayData";
import RenderObjectData from "./RenderObjectData";
import { useFetchStore } from "../stores";


const FetchData = ( { url } ) => {
    const { data, fetchData } = useFetchStore();



    useEffect( () => {
        fetchData( url );
    }, [ url ] );

    const isArrayOrObject = () => {

        if ( typeof data === "object" && !Array.isArray( data ) )
        {
            return "object";
        } else
        {
            return "array";
        }
    };

    const arrayOrObject = isArrayOrObject();

    return (
        <Suspense fallback={ <div>Loading...</div> }>
            <h2>Fetching data through Mobx from jsonplaceholder</h2>

            { arrayOrObject === "array" ? <RenderArrayData /> : "" }

            { arrayOrObject === "object" ? <RenderObjectData /> : "" }
        </Suspense>
    );
};

export default FetchData;
