import React, { useContext } from "react";
import { MemoryContext } from "../../contexts/MemoriesContext"

import { OverlayMemoryModal, HeaderModal, MemoryModalStyled, FormContainer, InputGroup } from "./style";
import { VscChromeClose } from "react-icons/vsc"


export default function MemoryModal(){
    const { modalClose,title, titleHandler, text, textHandler, handleSubmit } = useContext(MemoryContext)


    return(
        <OverlayMemoryModal>
            <MemoryModalStyled>
                <HeaderModal>
                    <button type="button" onClick={modalClose}>
                        <VscChromeClose />
                    </button>                                       
                </HeaderModal>

                <FormContainer onSubmit={handleSubmit}>                    
                    <InputGroup>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" value={title} onChange={titleHandler}/>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="text">Memo</label>
                        <textarea id="text" type="text" value={text} onChange={textHandler}/>
                    </InputGroup>
                    <button type="submit">
                        Submit
                    </button>
                </FormContainer>

               
            </MemoryModalStyled>
            
        </OverlayMemoryModal>
    )
}