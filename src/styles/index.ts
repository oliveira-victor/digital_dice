import styled, { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Federo', sans-serif;
        list-style: none;
    }
`

export const Container = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${variables.lightThemeBg};
    min-height: 100vh;
`

export default GlobalStyle