import React, {createContext, useContext,useReducer} from "react";

//Preparing the datalayer
export const DataLayerContext = createContext();

//DataLayer which has children in it
export const DataLayer =({initialState, reducer, children})=> (
    <DataLayerContext.Provider value = {useReducer(reducer, initialState)}> {/**passing the value to the datalayer */}
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);