
import { NavStyled, LeftStyled, ButtonsNavStyled,RightStyled } from "./style";
import Hamburguer from "../Hamburguer";
import PointsMenu from "../PointsMenu";
import {VscSearch} from "react-icons/vsc"
import MenuUser from "../MenuUser";



export default function Nav () {

    
    

    return (
        <NavStyled>
            
                <LeftStyled>
                    <ButtonsNavStyled>
                        <Hamburguer />                    
                    </ButtonsNavStyled>
                    <h3>All Memories</h3>
                </LeftStyled>

                <RightStyled>
                    <ButtonsNavStyled>
                        <VscSearch />
                    </ButtonsNavStyled>
                    <ButtonsNavStyled>
                        <PointsMenu />
                    </ButtonsNavStyled>
                    
                </RightStyled>
                <MenuUser />
            
            
        </NavStyled>
    )
}