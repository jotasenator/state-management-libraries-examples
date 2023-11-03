import { useBoundStore } from "../stores";


const RenderArrayData = () => {
    const data = useBoundStore( state => state.data );
    return (
        <>
            { data.map( ( { id, title } ) => (
                <div key={ id }>
                    <p>{ title }</p>
                </div>
            ) ) }
        </>
    );
};

export default RenderArrayData;
