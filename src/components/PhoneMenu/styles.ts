import styled, { keyframes } from "styled-components";

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translate(8px, -8px);}
    40% {transform: translate(8px, -14px);}
    60% {transform: translate(8px, -12px);}
`

export const MenuBar = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.headerColor};
    width: 100%;
    height: 70px;
    z-index: 5;
    padding: 10px 10px;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.3);

    @media (min-width: 768px) {
        display: none;
    }
`

export const PhoneMenuList = styled.ul`
    display: flex;
    justify-content: space-around;
`

export const PhoneMenuButton = styled.li`
    width: 60px;
    height: 100%;
    text-align: center;
    color: #8c8c8c;
`

export const BtnIcon = styled.img`
    height: 30px;
`

export const CartBtnContainer = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
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