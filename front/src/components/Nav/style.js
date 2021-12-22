import styled from "styled-components";

export const NavStyled = styled.div ` 

    width: 100%;
    height: 5%;
    

    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--color-four);

`

export const LeftStyled = styled.div `

    display: flex;
    justify-content: space-between;
    align-items: center;

   
`

export const RightStyled = styled.div` 

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    

`

export const ButtonsNavStyled = styled.button ` 

    border: none;
    background-color: transparent;
    cursor: pointer;

    

    transition: opacity 0.2s;

    & svg {
        height: 20px;
        width: 20px;
        color: var(--color-five);
    }

    &:hover {
        opacity: 0.5;
    }

`