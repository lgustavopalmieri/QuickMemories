import React,{ useContext } from "react";
import { MemoryContainer, ButtonArea, Button } from "./style";
import { MemoryContext } from "../../contexts/MemoriesContext";


import { VscStarFull,VscTrash,VscEdit } from "react-icons/vsc"

export default function Memory ({id, title, text, favorite}) {

    const { handleEdit, handleFavorite, handleDelete } = useContext(MemoryContext);

    return (

        <li>
            <MemoryContainer >
                <h3>{title}</h3>
                <p>{text}</p>
                <ButtonArea>

                    <Button favorite={favorite} onClick={() => handleFavorite(id)}>
                        <VscStarFull />
                    </Button>

                    <Button onClick={() => handleEdit (title, text, id)}>
                        <VscEdit />
                    </Button>

                    <Button onClick={() => handleDelete(id)}>
                        <VscTrash />
                    </Button> 

                </ButtonArea>
            </MemoryContainer>
        </li>

        
        
    )
}