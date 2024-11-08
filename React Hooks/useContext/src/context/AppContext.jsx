import { createContext } from 'react';


export const AppContext = createContext();

const ContextProvider = (props) => {

    const phone = "+91 8581096532";

    const name = "Zeyaur Rahman";

    return (
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;