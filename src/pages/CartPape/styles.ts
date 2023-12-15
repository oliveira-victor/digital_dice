import styled from "styled-components";
import { ContentWrapper } from "../../styles";
import variables from "../../styles/variables";
import { removeItemBtn } from "../../components/GameCard/styles";

export const CartContentWrapper = styled(ContentWrapper)`
    margin-top: 80px;

    @media (max-width: 767px) {
        margin-top: 50px;
    }
`

export const EmptyCartContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding: 20px;

    & img {
        width: 250px;
    }
`

export const EmptyCartTxt = styled.span`
    font-size: 30px;
    color: ${variables.lightGrayBtn};

    @media (max-width: 767px) {
        text-align: center;
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

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
    }
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

    @media (max-width: 767px) {
        width: 100%;
    }
`