import { createContext, useState } from "react";

export const ToolbarContext = createContext({
    toolbar: {
        title: "",
        userName: ''
    },
    setToolbar: () => {}
});

export const ToolbarProvider = ({children}) => {
    const [toolbar, setToolbar] = useState({
        title: "",
        userName: ''
    })
    return (
        <ToolbarContext.Provider value={{toolbar, setToolbar}}>
            {children}
        </ToolbarContext.Provider>
    )
}