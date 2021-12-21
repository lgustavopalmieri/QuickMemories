import React from "react";
import { Container } from "./style.js";
import Nav from "../Nav/index.jsx";
import AddButton from "../AddButton/index.jsx";
import Main from "../Main/index.jsx";
import MenuUser from "../MenuUser/index.jsx";

export default function Layout () {
    return (
        <Container>
            <Nav />
            
            <AddButton />
            <Main />
            
        </Container>
    )
}