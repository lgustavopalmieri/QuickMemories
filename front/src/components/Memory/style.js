import styled from "styled-components";

export const MemoryContainer = styled.div ` 

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    width: 200px;
    height: 300px;
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 10px;
    padding:10px;      
    border: solid 2px var(--color-four);

    h3{
        overflow: hidden;
        height: 40px;
        
        white-space: nowrap;        
        
    }

    p{
        
        overflow: hidden;
        word-break:break-all;
    }

`


export const ButtonArea = styled.footer ` 

    display: flex;
    justify-content: space-between;  
    margin-top:16px;

`


export const Button = styled.button ` 

    border: none;
    background-color: transparent;
    cursor: pointer;

    transition: opacity 0.2s ease-out;

    svg {

        width: 20px;
        height: 20px;
        
        color: var(--color-five);
        color: ${(props) => (props.favorite ? "#3d898d" : "#2f404d")};
        
    }

    &:hover {
            opacity: 0.5;
            color: var(--color-four);
        }



`