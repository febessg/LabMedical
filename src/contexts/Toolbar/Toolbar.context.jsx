import { createContext, useState } from "react";

export const ToolbarContext = createContext({
    toolbar: {
        title: "",
        user: {}
    },
    setToolbar: () => {}
});

export const ToolbarProvider = ({children}) => {
    const [toolbar, setToolbar] = useState({
        title: "",
        user: {}
    })
    return (
        <ToolbarContext.Provider value={{toolbar, setToolbar}}>
            {children}
        </ToolbarContext.Provider>
    )
}