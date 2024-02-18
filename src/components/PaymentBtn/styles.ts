import styled from "styled-components";
import variables from "../../styles/colors";

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