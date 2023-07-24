import { createContext, useState } from "react";

export const PatientsContext = createContext({
    patient: {},
    setPatient: () => {}
});

export const PatientsProvider = ({children}) => {
    const [patient, setPatient] = useState({})

    return (
        <PatientsContext.Provider value={{patient, setPatient}}>
            {children}
        </PatientsContext.Provider>
    )
}