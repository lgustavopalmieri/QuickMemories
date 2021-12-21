import React from "react";
import { MainStyled } from "./style";
import Memory from "../Memory";
import AddButton from "../AddButton/index.jsx";

export default function Main () {
    return (
        <MainStyled>
            <AddButton />
            <Memory />
            <Memory />
            <Memory />
            <Memory />
        </MainStyled>
    )
}