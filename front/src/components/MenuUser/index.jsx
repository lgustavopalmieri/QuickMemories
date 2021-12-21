import React from "react";
import { MenuUserStyled,OverlayMenuUserStyled } from "./style";

export default function MenuUser () {
    return (
        <>
            <OverlayMenuUserStyled>
                <MenuUserStyled>
                    <h4>my memos</h4>
                    <h4>favorites</h4>
                    <h4>login</h4>
                </MenuUserStyled>
            </OverlayMenuUserStyled>
        </>
        

    
    )
}