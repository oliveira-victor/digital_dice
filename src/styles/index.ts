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

    h2 {
        font-size: 60px;
        font-weight: 400;
    }
`

export const Container = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${variables.lightThemeBg};
`

export const ContentWrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`

export default GlobalStyle