import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, html, body{
        margin: 0px;
        padding: 0px;
        font-family: ${(props) => props.theme.fonts.default};
        overflow: hidden;
        color: ${(props) => props.theme.colors.gray1};
    }
    a, a:hover, a:focus, a:active{
        text-decoration: none;
        color: inherit;
    }
    a:hover{
        cursor: pointer;
        color: ${(props) => props.theme.colors.secondary};
    }

    body{
        width: 100vw;
        height: 100vh;
    }    
`;
