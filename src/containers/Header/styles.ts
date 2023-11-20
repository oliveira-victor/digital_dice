import styled from "styled-components";
import variables from "../../styles/variables";

export const Header = styled.header`
    background-color: #fff;
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

    &:hover {
        color: ${variables.mainColor};
    }
`

export const CartIcon = styled.div`
    margin: 0 20px;
    position: relative;

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
`