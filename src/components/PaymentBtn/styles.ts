import styled from "styled-components";
import colors from "../../styles/colors";

export const PurchaseBtn = styled.button`
    border: none;
    border-radius: 6px;
    background-color: ${colors.greenColor};
    color: #fff;
    padding: 10px 18px;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        background-color: ${colors.greenColorHover};
    }
`