import styled from "styled-components";

export const AddButtonStyled = styled.div ` 

    justify-content: center;
    align-items: center;
    display: flex;

    position: fixed;
    bottom: 0;
    right: 0;

    font-size: 2em;
    padding: 20px;
    width: 20px;
    height: 20px;   
    border-radius: 100%; 

    border-style: none;
    background-color: var(--color-five);
    color: var(--color-two);

    cursor: pointer;
    margin-right: 0.5em;
    margin-bottom: 0.5em;

    transition: opacity 0.2s;

    &:hover {
        opacity: 0.5;
    }


`