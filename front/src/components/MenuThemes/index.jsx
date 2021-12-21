import React from "react";
import { MenuThemesStyled,OverlayMenuThemesStyled } from "./style";

export default function MenuThemes () {
    return (
        <>
            <OverlayMenuThemesStyled>
                <MenuThemesStyled>
                    <h4>dark mode</h4>
                    <h4>cyber mode</h4>
                    <h4>neutral mode</h4>
                </MenuThemesStyled>
            </OverlayMenuThemesStyled>
        </>
        

    
    )
}