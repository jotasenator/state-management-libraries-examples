import { useFetchStore } from "../stores";


const RenderArrayData = () => {
    const { data } = useFetchStore();
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
