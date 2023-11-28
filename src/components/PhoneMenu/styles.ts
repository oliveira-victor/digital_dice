import styled from "styled-components";

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
    text-align: center;
    color: #8c8c8c;
`

export const BtnIcon = styled.img`
    height: 30px;
`