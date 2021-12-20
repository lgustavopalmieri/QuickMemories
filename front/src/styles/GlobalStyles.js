import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    :root{
        --color-one: #e2dddf;
        --color-two: #85ebd9;
        --color-three: #b0acb0;
        --color-four: #3d898d;
        --color-five: #2f404d;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;

        font-family: 'Raleway', sans-serif;


    }

    h1{
        color: var(--color-two);
        
    }

    #root{
        height: 100vh;
    }

    ul, li {
        list-style:none;
    }

    body{
        background-color: var(--color-one);
        
    }

`