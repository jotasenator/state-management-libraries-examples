import { useBoundStore } from "../stores";


const RenderObjectData = () => {
    const data = useBoundStore( state => state.data );
    return (
        <div>
            <p>{ data.title }</p>
        </div>
    );
};

export default RenderObjectData;
