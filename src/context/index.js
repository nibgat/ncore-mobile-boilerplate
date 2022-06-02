import React, {
    createContext,
    useContext,
    useReducer
} from "react";
import {
    GLOBAL_STATE_STORE
} from "../constants";

const GlobalStateContext = createContext(GLOBAL_STATE_STORE);
const GlobalStateDispatchContext = createContext(undefined);

const GlobalStateProvider = ({
    children
}) => {
    const [state, dispatch] = useReducer((state, newState) => {
        return {
            ...state,
            ...newState
        };
    }, GLOBAL_STATE_STORE);

    return <GlobalStateContext.Provider
        value={state}
    >
        <GlobalStateDispatchContext.Provider
            value={dispatch}
        >
            {children}
        </GlobalStateDispatchContext.Provider>
    </GlobalStateContext.Provider>;
};

export const useGlobalState = () => useContext(GlobalStateContext);
export default GlobalStateProvider;
