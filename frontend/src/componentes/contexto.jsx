import { useState, createContext } from "react";

export const Context = createContext(); 

export function ContextProvider ( {children} ) {

    const store = useState({
        puntos: [1,2,3,4,5,6,7,8,10,12],
        
    });

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}
