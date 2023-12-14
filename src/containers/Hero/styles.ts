import styled from "styled-components";
import heroImg from '../../assets/hero.webp'

export const HeroImg = styled.section`
    background-image: url(${heroImg});
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 80vh;
    background-attachment: fixed;
    position: relative;

    @media (max-width: 767px) {
        height: 70vh;
        background-position: -140px;
    }
`

export const HeroGradient = styled.div`
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0;
    background: rgb(${(props) => props.theme.gradientBg});
    background: linear-gradient(0deg, rgba(${(props) => props.theme.gradientBg},1) 0%, rgba(${(props) => props.theme.gradientBg},0) 100%);
`