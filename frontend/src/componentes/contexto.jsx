import { useState, createContext } from "react";

export const Context = createContext(); 

export function ContextProvider ( {children} ) {

    const store = useState({
        puntos: [1,2,3,4,5,6,7,8,10,12],
        votos: {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
        }
    });

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}
