import React, { useContext } from "react";

import { MemoryContext } from "../../contexts/MemoriesContext"

import { AddButtonStyled } from "./style";

export default function AddButton () {

    const {handleAdd} = useContext(MemoryContext) 

    return (
        <AddButtonStyled onClick={handleAdd}>
            +
        </AddButtonStyled>
    )
}