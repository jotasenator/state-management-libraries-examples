import { create } from "zustand";
import useCounterStore from "./counterStore";
import useFetchStore from "./fetchStore";
import { devtools } from "zustand/middleware";

export const useBoundStore = create(
    devtools( ( ...a ) => ( {
        ...useCounterStore( ...a ),
        ...useFetchStore( ...a ),
    } ) ) )

