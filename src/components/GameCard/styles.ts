import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";

const FadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

export const CardImage = styled.div`
    width: 330px;
    height: 330px;
    animation-name: ${FadeIn};
    animation-duration: 1s;
    background-size: cover;
    background-position: center;
    transition: all .7s ease;
    background-size: 330px;
`

export const GameCard = styled.div`
    background-color: ${(props) => props.theme.mainColor};
    width: 350px;
    border-radius: 16px;
    padding: 10px;
    padding-bottom: 18px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    animation-name: ${FadeIn};
    animation-duration: 1s;
    transition: all .2s ease;

    &:hover {
        box-shadow: ${(props) => props.theme.cardHoverShadow};
        transform: translateY(-4px);
    }

    &:hover ${CardImage} {
        background-size: 346px;
    }
`

export const GameTitle = styled.h3`
    color: ${(props) => props.theme.cardTxtColor};
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
    background-color: ${(props) => props.theme.genreBtn};
    color: ${(props) => props.theme.genreTxt};
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
    color: ${colors.lightGrayBtn};
    text-decoration: line-through;
`

export const MoreInfoBtn = styled.button`
    min-width: 124px;
    padding: 6px 0;
    font-size: 20px;
    color: #fff;
    background-color: ${colors.secondColor};
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: ${colors.infoBtnHover};
    }
`

export const GameBuyRow = styled(GameInfoRow)`
    margin-top: 10px;
`

export const GamePrice = styled.div`
    color: ${(props) => props.theme.cardTxtColor};
    font-size: 36px;
`

export const BuyBtn = styled(MoreInfoBtn)`
    padding: 14px 16px;
    background-color: ${colors.mainColor};
    font-size: 20px;

    &:hover {
        background-color: ${colors.addBtnHover};
    }
`

export const removeItemBtn = styled(BuyBtn)`
    background-color: ${colors.removeBtn};

    &:hover {
        background-color: ${colors.removeBtnHover};
    }
`

export const GameSummary = styled.div`
    color: ${(props) => props.theme.cardTxtColor};
    padding: 0 20px;
    height: 330px;
    animation-name: ${FadeIn};
    animation-duration: 1s;
    display: flex;
    align-items: center;
    line-height: 1.4;
`