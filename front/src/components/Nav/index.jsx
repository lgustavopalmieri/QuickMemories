
import { useState } from "react";
import { NavStyled, LeftStyled, ButtonsNavStyled,RightStyled } from "./style";

import PointsMenu from "../PointsMenu";
import {VscSearch} from "react-icons/vsc"

import MenuThemes from "../MenuThemes"
import Search from "../Search"

export default function Nav () {

    
    const [showMenuRight, setShowMenuRight] = useState (false)
    const [showSearch, setShowSearch] = useState(false)


    function handleRightMenu () {
        setShowMenuRight(!showMenuRight)
    }

    function handleSearch () {
        setShowSearch(!showSearch)
    }
    
   

    return (
        <NavStyled>
            
                <LeftStyled>
                    <h3>Quick Memories</h3>
                </LeftStyled>
                 
                <RightStyled>
                    {showSearch && <Search />}
                    <ButtonsNavStyled onClick={handleSearch}>
                        <VscSearch />
                    </ButtonsNavStyled>
                    <ButtonsNavStyled onClick={handleRightMenu}>
                        <PointsMenu />
                    </ButtonsNavStyled>                    
                </RightStyled>
                {showMenuRight && <MenuThemes />}
            
            
        </NavStyled>
    )
}