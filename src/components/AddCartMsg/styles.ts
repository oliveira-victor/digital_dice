import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
    0% { opacity: 1; }
    50% { opacity: 1; }
    85% { opacity: 0; }
    100% { opacity: 0; }
`

export const CartActionBox = styled.div`
    position: relative;
    background-color: #46b53c;
    color: #fff;
    font-size: 24px;
    padding: 30px;
    position: fixed;
    bottom: 0;
    right: 0;
    transform: translate(-30px, -30px);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    animation-name: ${fadeOut};
    animation-duration: 5s;
    z-index: 5;

    @media (max-width: 767px) {
        width: 84%;
        transform: translate(24px, -80px);
        right: auto;
    }

    img {
        position: absolute;
        width: 40px;
        transform: translate(-46px, -46px) rotate(-14deg);
    }
`