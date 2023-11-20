import * as S from './styles'

const GameCard = () => {
    return (
        <S.GameCard>
            <S.CardImage src="https://via.placeholder.com/400x400" alt="Game thumbnail" />
            <S.GameTitle>Game Name</S.GameTitle>
            <S.GenreList>
                <S.GenreButton>Race</S.GenreButton>
                <S.GenreButton>RPG</S.GenreButton>
            </S.GenreList>
            <S.GameInfoRow>
                <S.PreviousPrice>$: 15.0</S.PreviousPrice>
                <S.MoreInfoBtn>More info</S.MoreInfoBtn>
            </S.GameInfoRow>
            <S.GameBuyRow>
                <S.GamePrice>$: 10.0</S.GamePrice>
                <S.BuyBtn>Add to cart</S.BuyBtn>
            </S.GameBuyRow>
        </S.GameCard>
    )
}

export default GameCard