import styled, { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Federo', sans-serif;
        list-style: none;
        text-decoration: none;
        scroll-behavior: smooth;
    }

    h2 {
        font-size: 60px;
        font-weight: 400;

        @media (max-width: 767px) {
            font-size: 40px;
            text-align: center;
        }
    }
`

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 1.6;
    color: ${(props) => props.theme.paragraphColor};
`

export const Container = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.bgColor};
    position: relative;
`

export const ContentWrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2%;
    position: relative;
`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    margin-bottom: 100px;
`

export const SectionTitle = styled.h2`
    color: ${variables.mainColor};
    border-bottom: 2px solid ${variables.mainColor};
    margin-bottom: 80px;
`

export default GlobalStyle