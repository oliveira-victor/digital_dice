import styled from "styled-components";
import colors from "../../styles/colors";

export const CartForm = styled.form`
    background-color: ${(props) => props.theme.mainColor};
    padding: 30px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    input {
        width: 100%;
        height: 46px;
        padding: 6px;
        font-size: 20px;
        margin-bottom: 20px;
        border: 2px solid ${colors.lightGrayBtn};

        &.error {
            border: 2px solid red;
        }
    }
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

export const FormLabel = styled.label`
    color: ${colors.lightGrayBtn};
    font-size: 20px;
    margin-bottom: 6px;
    display: block;
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

export const AddressDoubleField = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 10px;
`

export const TripleFields = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`