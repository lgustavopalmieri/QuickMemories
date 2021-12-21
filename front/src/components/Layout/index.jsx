import React from "react";
import { Container } from "./style.js";
import Nav from "../Nav/index.jsx";

import Main from "../Main/index.jsx";


export default function Layout () {
    return (
        <Container>
            <Nav />
            
            
            <Main />
            
        </Container>
    )
}