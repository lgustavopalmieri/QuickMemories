import React from "react";
import { MainStyled } from "./style";
import Memory from "../Memory";
export default function Main () {
    return (
        <MainStyled>
            <Memory />
            <Memory />
            <Memory />
        </MainStyled>
    )
}