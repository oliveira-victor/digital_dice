import styled, { keyframes } from "styled-components"

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translate(8px, -8px);}
    40% {transform: translate(8px, -14px);}
    60% {transform: translate(8px, -12px);}
`

export const CartIcon = styled.div`
    margin: 0 20px;
    position: relative;
    cursor: pointer;

    & img {
        height: 26px;
    }
`

export const CartNotification = styled.div`
    background-color: red;
    color: #fff;
    font-size: 14px;
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    padding: 2px;
    border-radius: 50%;
    text-align: center;
    transform: translate(8px, -8px);
    animation: ${bounce} 2s infinite;
`