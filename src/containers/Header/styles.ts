import styled, { keyframes } from "styled-components";

import variables from "../../styles/colors";

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translate(8px, -8px);}
    40% {transform: translate(8px, -14px);}
    60% {transform: translate(8px, -12px);}
`

export const Header = styled.header`
    background-color: ${(props) => props.theme.headerColor};
    height: 84px;
    padding: 14px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const Title = styled.img`
    width: 220px;

    @media (max-width: 767px) {
        width: 140px;
    }
`

export const Menu = styled.menu`
    display: flex;
    align-items: center;
`

export const MenuList = styled.ul`
    display: flex;

    @media (max-width: 767px) {
        display: none;
    }
`

export const MenuOption = styled.li`
    padding: 10px 20px;
    color: ${variables.lightGrayBtn};
    font-size: 20px;
    transition: all .5s ease;
    text-decoration: none;

    &:hover {
        color: ${variables.mainColor};
    }
`

export const CartIcon = styled.div`
    margin: 0 20px;
    position: relative;
    cursor: pointer;

    & img {
        height: 26px;
    }

    @media (max-width: 767px) {
        display: none;
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

export const themeIcon = styled.img`
    width: 24px;
    margin: 0 20px;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
        transform: rotate(-20deg);
    }
`