import styled from "styled-components";
import variables from "../../styles/variables";
import { ContentWrapper } from "../../styles";

export const Footer = styled.footer`
    background-color: ${variables.mainColor};
    margin-top: 100px;
`

export const FooterContentWrapper = styled(ContentWrapper)`
    display: grid;
    grid-template-columns: auto 30%;
`

export const FooterInfo = styled.div`
    color: #fff;
    font-size: 20px;
`

export const SocialMediaIcons = styled.ul`
    display: flex;
    transform: translateY(-50px);

    & li {
        background-color: ${variables.mainColor};
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .5s ease;
        cursor: pointer;

        &:hover {
                transform: translateY(-6px);
            }

        & img {
            width: 40%;
        }
    }
`

export const SubscribeInput = styled.input`
    width: 520px;
    height: 66px;
    margin: 24px 0;
    border: none;
    border-radius: 10px;
    padding: 20px 24px;
    font-size: 20px;
    font-family: sans-serif;
`

export const SubscribeBtn = styled.button`
    background-color: ${variables.secondColor};
    color: #fff;
    font-size: 20px;
    padding: 20px 30px;
    border: none;
    border-radius: 10px;
    margin-left: 10px;
    height: 66px;
    cursor: pointer;
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
    }
`