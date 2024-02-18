import styled from "styled-components";
import { ContentWrapper } from "../../styles";
import variables from "../../styles/colors";
import { removeItemBtn } from "../../components/GameCard/styles";

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 6;
    display: flex;
    justify-content: center;
    align-items: center;

    .overlay {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        position: absolute;
    }
`

export const ModalContainer = styled.div`
    max-width: 900px;
    width: 100%;
    margin: 0 20px;
    padding: 20px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.cardTxtColor};
    z-index: 2;
    display: flex;
    gap: 40px;

    @media (max-width: 767px) {
        display: block;
        width: 90%;
    }

    img {
        max-width: 400px;
        width: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 20px;

            h3 {
                font-size: 40px;
                text-align: center;
            }

            div {
                text-align: center;
                font-weight: bold;
                font-size: 20px;
            }

            button {
            width: 100%;
            height: 40px;
            font-size: 20px;
            border: 2px solid ${(props) => props.theme.genreTxt};
            border-radius: 6px;
            background-color: ${(props) => props.theme.genreBtn};
            color: ${(props) => props.theme.genreTxt};
            cursor: pointer;
        }
    }
`

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
        width: 400px;

        @media (max-width: 767px) {
            width: 90%;
        }
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