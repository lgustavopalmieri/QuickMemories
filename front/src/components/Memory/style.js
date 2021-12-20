import styled from "styled-components";

export const MemoryStyled = styled.div ` 

    width: 150px;
    height: 200px;
    background-color: transparent;
    box-sizing: border-box;

    padding:10px;    
    overflow-y: hidden;
    border-radius: 10px;
    border: solid 2px var(--color-four); 

`
export const TextMemoStyled = styled.p `

    overflow-wrap: break-word;
    margin-bottom : 10px ;
    font-size: 0.8rem;
    line-height: 1.6;

    transition: opacity 0.2s;

    cursor: pointer;
    
    &:hover{
        opacity: 0.5;
    }
`