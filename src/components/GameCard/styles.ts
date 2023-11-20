import styled, { keyframes } from "styled-components";
import variables from "../../styles/variables";

const FadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

export const GameCard = styled.div`
    background-color: #fff;
    width: 320px;
    border-radius: 16px;
    padding: 10px;
    padding-bottom: 18px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    animation-name: ${FadeIn};
    animation-duration: 1s;
    transition: all .2s ease;

    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        transform: translateY(-4px);
    }
`

export const CardImage = styled.img`
    width: 100%;
`

export const GameTitle = styled.h3`
    font-size: 30px;
    font-weight: 400;
    text-align: center;
`

export const GenreList = styled.div`
    text-align: center;
    margin-top: 4px;
    margin-bottom: 24px;
`

export const GenreButton = styled.button`
    background-color: ${variables.lightGrayBtn};
    color: #fff;
    padding: 2px 24px;
    margin: 0 5px;
    border: none;
    border-radius: 6px;
    font-size: 20px;
`

export const GameInfoRow = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: end;
`

export const PreviousPrice = styled.div`
    font-size: 24px;
    color: ${variables.lightGrayBtn};
    text-decoration: line-through;
`

export const MoreInfoBtn = styled.button`
    min-width: 124px;
    padding: 6px 0;
    font-size: 20px;
    color: #fff;
    background-color: ${variables.secondColor};
    border: none;
    border-radius: 6px;
    cursor: pointer;
`

export const GameBuyRow = styled(GameInfoRow)`
    margin-top: 10px;
`

export const GamePrice = styled.div`
    font-size: 36px;
`

export const BuyBtn = styled(MoreInfoBtn)`
    padding: 14px 16px;
    background-color: ${variables.mainColor};
    font-size: 20px;
`