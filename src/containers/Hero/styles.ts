import styled, { keyframes } from "styled-components";
import heroImg from '../../assets/images/hero.webp'
import variables from "../../styles/colors";

const FadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

export const HeroImg = styled.section`
    background-image: url(${heroImg});
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
    width: 100%;
    height: 80vh;
    position: relative;
    text-align: right;

    div {
        padding-top: 40px;
        text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.9);

        @media (max-width: 767px) {
            padding-top: 14px;
        }
    }

    @media (max-width: 1023px) {
        height: 70vh;
        background-position: -140px;
        text-align: center;
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

export const HeroHighlightData = styled.div`
    animation-name: ${FadeIn};
    animation-duration: 1s;
    transition: all .2s ease;
`

export const ReleaseTitle = styled.button`
    font-size: 24px;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    background-color: ${variables.secondColor};
    color: #fff;

    @media (max-width: 767px) {
        font-size: 16px;
    }
`

export const HeroGameTitle = styled.span`
    font-size: 84px;
    color: #fff;
    display: block;
    margin-top: 20px;

    @media (max-width: 767px) {
        font-size: 40px;
    }
`

export const HeroText = styled.p`
    font-size: 28px;
    color: #fff;
    margin-top: 120px;

    span {
        text-decoration: line-through;
    }

    @media (max-width: 767px) {
        font-size: 16px;
        margin-top: 20px;
    }
`

export const HeroBtn = styled.button`
    background-color: ${variables.mainColor};
    color: #fff;
    font-size: 32px;
    margin-top: 20px;
    padding: 10px 30px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
        transform: translateY(-4px);
        background-color: ${variables.addBtnHover};
    }

    @media (max-width: 767px) {
        margin-top: 60px;
        font-size: 28px;
    }
`

export const HeroCheckoutBtn = styled(HeroBtn)`
    background-color: ${variables.greenColor};

    &:hover {
        background-color: ${variables.greenColorHover};
    }
`