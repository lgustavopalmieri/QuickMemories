import React, { useContext } from "react";
import { MemoryContext } from "../../contexts/MemoriesContext"

import { OverlayMemoryModal, HeaderModal, MemoryModalStyled, FormContainer, InputGroup } from "./style";
import { VscPassFilled } from "react-icons/vsc"


export default function MemoryModal(){
    const { modalClose } = useContext(MemoryContext)
    return(
        <OverlayMemoryModal>
            <MemoryModalStyled>
                <HeaderModal>
                    <VscPassFilled onClick={modalClose}/>                    
                </HeaderModal>
                <FormContainer>
                    <InputGroup>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" />
                    </InputGroup>
                    <InputGroup>
                        <label htmFor="memo">Memo</label>
                        <textarea id="memo" type="textarea" />
                    </InputGroup>
                </FormContainer>

               
            </MemoryModalStyled>
            
        </OverlayMemoryModal>
    )
}