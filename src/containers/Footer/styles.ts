import styled from "styled-components";
import colors from "../../styles/colors";
import { ContentWrapper } from "../../styles";

export const Footer = styled.footer`
    background-color: ${colors.mainColor};
    margin-top: 100px;
    padding: 0 2%;

    @media (max-width: 767px) {
        padding-bottom: 70px;
    }
`

export const FooterContentWrapper = styled(ContentWrapper)`
    display: grid;
    grid-template-columns: auto 30%;

    @media (max-width: 767px) {
        display: block;
    }
`

export const FooterInfo = styled.div`
    color: #fff;
    font-size: 20px;
`

export const SocialMediaIcons = styled.ul`
    display: flex;
    transform: translateY(-50px);

    @media (max-width: 767px) {
        justify-content: space-between;
        margin: 0 auto;
    }

    & li {
        background-color: ${colors.mainColor};
        width: 100px;
        height: 100px;
        margin-right: 16px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .5s ease;
        cursor: pointer;

        @media (max-width: 767px) {
            margin-right: 0;
        }

        &:hover {
                transform: translateY(-6px);
            }

        & img {
            width: 40%;
        }
    }
`

export const SubscribeForm = styled.form`
    width: 70%;
    margin: 24px 0;
    display: grid;
    grid-template-columns: 70% auto;

    @media (max-width: 767px) {
        width: 100%;
            display: block;
        }
`

export const SubscribeInput = styled.input`
    height: 66px;
    border: none;
    border-radius: 10px;
    padding: 20px 24px;
    font-size: 20px;
    font-family: sans-serif;

    @media (max-width: 767px) {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        text-align: center;
    }
`

export const SubscribeBtn = styled.button`
    background-color: ${colors.secondColor};
    color: #fff;
    font-size: 20px;
    padding: 20px 30px;
    border: none;
    border-radius: 10px;
    margin-left: 10px;
    height: 66px;
    cursor: pointer;

    &:hover {
        background-color: ${colors.infoBtnHover};
    }

    @media (max-width: 767px) {
        width: 100%;
        margin-left: 0;
    }
`

export const Copyright = styled.p`
    margin-top: 60px;
    margin-bottom: 30px;
`

export const FooterImg = styled.div`
    & img {
        width: 70%;
        transform: translateY(-100px);
        display: block;
        margin: 0 auto;

        @media (max-width: 767px) {
            transform: none;
            padding-bottom: 20px;
        }
    }
`