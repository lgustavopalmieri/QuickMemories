import styled from "styled-components";

export const HeaderModal = styled.div ` 

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    padding: 15px 20px;

    svg {
        background: none;
        border: none;

        width: 25px;
        height: 25px;
        
        color: var(--color-five);
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.5;
        }
    }

`

export const MemoryModalStyled = styled.div ` 

    width: 500px;
    height: 600px;
    background-color: var(--color-one);
    border: 3px solid var(--color-four);
    border-radius: 15px;

    

`

export const OverlayMemoryModal = styled.div ` 

    width: 100%;
    height: 100%;
    background: rgba(145, 145, 145, 0.8);

    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    left: 0;
    right: 0;
    top:0;
    
    position: fixed;
    top: 50px;    

`

export const FormContainer = styled.div ` 

    display: flex;
    flex-direction: column;
    
    padding: 0px 20px;
    width: 100%;
    height: 85%;
    justify-content: space-between;

`

export const InputGroup = styled.div` 

    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--color-five);

    font-size: 1.1rem;
    font-weight: 500;
    

    label{
        margin-bottom: 5px;
    }
    
    input{
        height: 30px;
        padding: 10px;
        border-radius: 5px;
        box-shadow: none;
        border: none;
        color: var(--color-five);
    }

    textarea{
        resize: none;
        height: 400px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        color: var(--color-five);
    }

`