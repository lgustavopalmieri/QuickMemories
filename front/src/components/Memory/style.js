import styled from "styled-components";

export const MemoryContainer = styled.div ` 

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    max-width: 200px;
    max-height: 300px;
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 10px;
    padding:10px;      
    border: solid 2px var(--color-four);

`

export const MemoryStyled = styled.div ` 

    max-height:250px ;
    overflow-y: hidden;  
    transition: opacity 0.2s;

`
export const TextMemoStyled = styled.p `

    overflow-wrap: break-word;
    margin-bottom : 10px ;
    font-size: 0.8rem;
    line-height: 1.6;
    
`

export const FooterMemoStyled = styled.footer ` 

    display: flex;
    justify-content: space-between;

    svg {
        background: none;
        border: none;

        width: 20px;
        height: 20px;
        
        color: var(--color-five);
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
            color: var(--color-four);
        }
    }

`

export const TitleMemoStyled = styled.div `   

    max-height:1.2rem;
    margin-bottom: 5px;
    overflow-y: hidden;  
    font-weight: 800;
    color: var(--color-five);

`