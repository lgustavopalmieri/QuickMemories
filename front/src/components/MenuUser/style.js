import styled from "styled-components";

export const MenuUserStyled = styled.div ` 

    position: fixed;
    top: 50px;
    left: 0px;

    background-color: var(--color-one);
   
    width: 200px;
    height: 210px;

    display: flex;
    flex-direction: column;
    
    border-bottom-right-radius:15px;

    h4 {
        margin-left: 60px;
        margin-top: 25px;
        color: var(--color-four);
        
    }

`

export const OverlayMenuUserStyled = styled.div ` 

    width: 100%;
    height: 100%;
    background: rgba(145, 145, 145, 0.6);
    bottom: 0;
    left: 0;
    right: 0;

    position: fixed;
    top: 50px;

    

`