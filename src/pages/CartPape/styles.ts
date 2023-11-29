import styled from "styled-components";
import { ContentWrapper } from "../../styles";
import variables from "../../styles/variables";
import { removeItemBtn } from "../../components/GameCard/styles";

export const CartContentWrapper = styled(ContentWrapper)`
    margin-top: 80px;
`

export const GameList = styled.li`
    padding: 8px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${variables.mainColor};
    border-bottom: 1px solid ${variables.mainColor};
`

export const GameInfo = styled.div`
    display: flex;
    gap: 10px;
`

export const GameThumb = styled.img`
    width: 150px;
    border-radius: 6px;
`

export const GameCartTitle = styled.h3`
    font-size: 28px;
    color: ${(props) => props.theme.cardTxtColor};
    margin-bottom: 20px;
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
`

export const CheckoutContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: end;
    margin-top: 30px;
    padding: 8px;
    padding-bottom: 100px;
`

export const Total = styled.span`
    font-size: 30px;
    color: ${(props) => props.theme.cardTxtColor};
`

export const CheckoutBtn = styled(removeItemBtn)`
    background-color: ${variables.greenColor};
    font-size: 28px;
    height: auto;
    display: block;

    &:hover {
        background-color: ${variables.greenColorHover};
        transform: translateY(-4px);
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.6);
    }
`