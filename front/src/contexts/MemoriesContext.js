import { createContext, useState } from "react";
import MemoryModal from "../components/MemoryModal"


export const MemoryContext = createContext();

export function MemoryContextProvider ({ children }) {

    const [openMemoryModal, setOpenMemoryModal] = useState(false);


    function handleAdd(){
        setOpenMemoryModal(true)
    }

    return (
        <MemoryContext.Provider value={{handleAdd}}>
            {children}
            {openMemoryModal && <MemoryModal />}
        </MemoryContext.Provider>
    )
}