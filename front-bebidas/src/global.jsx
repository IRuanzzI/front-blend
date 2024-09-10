import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: #000;
        color: #E0E0E0;
        font-family: Arial, sans-serif;
    }

    @media (max-width: 768px) {
        body {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        body {
            font-size: 12px;
        }
    }
`;
