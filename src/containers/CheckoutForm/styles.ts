import styled from "styled-components";
import variables from "../../styles/variables";

export const CheckoutContainer = styled.section`
`

export const CartForm = styled.form`
    background-color: ${(props) => props.theme.mainColor};
    padding: 30px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const InputsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media (max-width: 767px) {
        display: block;
    }
`

export const FormTitle = styled.h3`
    font-size: 26px;
    color: ${(props) => props.theme.cardTxtColor};
    margin-bottom: 20px;
`

export const submitContainer = styled.div`
    margin-top: 40px;
    text-align: right;

    p {
        color: ${(props) => props.theme.cardTxtColor};
        margin-bottom: 10px;
        font-size: 18px;
    }

    @media (max-width: 767px) {
        text-align: center;
    }
`

export const DoubleFields = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`

export const TripleFields = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`

export const PurchaseBtn = styled.button`
    border: none;
    border-radius: 6px;
    background-color: ${variables.greenColor};
    color: #fff;
    padding: 10px 18px;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        background-color: ${variables.greenColorHover};
    }
`