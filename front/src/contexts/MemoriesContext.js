import { createContext, useState } from "react";
import MemoryModal from "../components/MemoryModal"
import api from "../services/api"

export const MemoryContext = createContext();

export function MemoryContextProvider ({ children }) {

    const [openMemoryModal, setOpenMemoryModal] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [id,setId] = useState(false);

    function handleEdit(memoryTitle, memoryText, memoryId){
        setTitle(memoryTitle);
        setText(memoryText);
        setId(memoryId);
        setOpenMemoryModal(true);
    }

    function handleAdd (){
        setOpenMemoryModal(true)
    }


    function modalClose (){
        setOpenMemoryModal(false)
        if(title){
            setTitle('')
        }
        if(text){
            setText('')
        }
    }

    function titleHandler (event) {
        setTitle(event.target.value)
    }

    function textHandler(event) {
        setText(event.target.value)
    }

    function handleFavorite (id) {
        api.patch(`memories/${id}`)
    }

    function handleDelete(id) {
        api.delete(`memories/${id}`)
    }

    function handleSubmit (event){
        event.preventDefault();

        const memory = { title, text }

        if(id){
            api.put(`memories/${id}`, memory)
        }else {
            api.post("memories", memory)
        }

        setOpenMemoryModal(false)
    }
    

    

    return (
        <MemoryContext.Provider value={{handleAdd, modalClose, title, setTitle, 
        text, setText, titleHandler,textHandler, handleSubmit, handleEdit, id, 
        setId, handleFavorite, handleDelete}}>
            {children}
            {openMemoryModal && <MemoryModal />}
        </MemoryContext.Provider>
    )
}