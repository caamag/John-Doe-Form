import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        background-color: ${theme.palette.lightBackground};
    }
`;
