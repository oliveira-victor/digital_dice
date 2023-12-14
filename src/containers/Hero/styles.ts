import styled from "styled-components";
import heroImg from '../../assets/hero.webp'
import variables from "../../styles/variables";

export const HeroImg = styled.section`
    background-image: url(${heroImg});
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 80vh;
    background-attachment: fixed;
    position: relative;
    text-align: right;

    div {
        padding-top: 40px;
        text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.9);

        @media (max-width: 767px) {
            padding-top: 20px;

            button {
                font-size: 20px;
            }
        }
    }

    @media (max-width: 767px) {
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

export const ReleaseTitle = styled.button`
    font-size: 24px;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    background-color: ${variables.secondColor};
    color: #fff;
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
    }
`