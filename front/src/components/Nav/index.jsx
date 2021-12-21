
import { useState, useEffect } from "react";
import { NavStyled, LeftStyled, ButtonsNavStyled,RightStyled } from "./style";
import Hamburguer from "../Hamburguer";
import PointsMenu from "../PointsMenu";
import {VscSearch} from "react-icons/vsc"
import MenuUser from "../MenuUser";
import MenuThemes from "../MenuThemes"
import Search from "../Search"

export default function Nav () {

    const [showMenuLeft, setShowMenuLeft] = useState(false)
    const [showMenuRight, setShowMenuRight] = useState (false)
    const [showSearch, setShowSearch] = useState(false)

    function handleLeftMenu (){
        setShowMenuLeft(!showMenuLeft)
    }

    function handleRightMenu () {
        setShowMenuRight(!showMenuRight)
    }

    function handleSearch () {
        setShowSearch(!showSearch)
    }
    
    useEffect(() => {
        setShowMenuRight(false)
        
    },[showMenuLeft])

    useEffect(() => {
        setShowMenuLeft(false)
    },[showMenuRight])

    return (
        <NavStyled>
            
                <LeftStyled>
                    <ButtonsNavStyled onClick={handleLeftMenu}>                        
                        <Hamburguer />                                           
                    </ButtonsNavStyled>
                    <h3>All Memories</h3>
                </LeftStyled>
                {showMenuLeft && <MenuUser />} 
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