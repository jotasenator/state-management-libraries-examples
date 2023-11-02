import { useFetchStore } from "../stores";

const RenderObjectData = () => {
    const { data } = useFetchStore();
    return (
        <div>
            <p>{ data.title }</p>
        </div>
    );
};

export default RenderObjectData;
