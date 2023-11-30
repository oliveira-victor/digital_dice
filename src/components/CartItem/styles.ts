import styled from "styled-components";
import variables from "../../styles/variables";

export const GameList = styled.li`
    padding: 8px;
    display: flex;
    gap: 10px;
    border-top: 1px solid ${variables.mainColor};
    border-bottom: 1px solid ${variables.mainColor};
`

export const GameInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`

export const GameThumb = styled.img`
    width: 150px;
    border-radius: 6px;
`

export const GameCartTitle = styled.h3`
    font-size: 28px;
    color: ${(props) => props.theme.cardTxtColor};
    margin-bottom: 20px;

    @media (max-width: 767px) {
        margin-bottom: 10px;
        font-size: 20px;
    }
`

export const PreviousPriceCart = styled.span`
    font-size: 20px;
    text-decoration: line-through;
    color: ${variables.lightGrayBtn};
    display: block;
`

export const CurrentPriceCart = styled.span`
    font-size: 24px;
    color: ${(props) => props.theme.cardTxtColor};
`

export const RemoveItemButton = styled.button`
    height: 40px;
    padding: 0px 30px;
    background-color: ${variables.removeBtn};
    font-size: 16px;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: ${variables.removeBtnHover};
    }

    @media (max-width: 767px) {
        margin: 0 auto;
        display: block;
    }
`