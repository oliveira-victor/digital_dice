import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { Game } from '../../App'
import { add } from '../../store/reducers/cart'
import { revealMsg } from '../../store/reducers/reveal'
import { RootReducer } from '../../store'
import { currencyFormat } from '../../utils/currency'

import * as S from './styles'

type Props = {
    game: Game
}

const GameCard = ({ game }: Props) => {
    const dispatch = useDispatch()

    const items = useSelector((state: RootReducer) => state.cart.items)

    const [displayGameSummary, setDisplayGameSummary] = useState(false)

    function handleCartAction() {
        dispatch(add(game))

        if (items.find((product) => product.id === game.id)) {
            return ''
        } else {
            setTimeout(() => {
                dispatch(revealMsg())
            }, 4000);
            dispatch(revealMsg())
        }
    }

    function renderCartButton() {
        if (items.find((product) => product.id === game.id)) {
            return <S.removeItemBtn onClick={handleCartAction} type='button'>Remove</S.removeItemBtn>
        } else {
            return <S.BuyBtn onClick={handleCartAction} type='button'>Add to cart</S.BuyBtn>
        }
    }

    return (
        <S.GameCard>
            {!displayGameSummary ?
                <S.CardImage style={{backgroundImage: `url(${game.thumbnail})`}}></S.CardImage>
                : ''}
            <S.GameTitle>{game.title}</S.GameTitle>
            <S.GenreList>
                {game.genre.map((item, index) => (
                    <S.GenreButton key={index}>{item}</S.GenreButton>
                ))}
            </S.GenreList>
            {displayGameSummary ?
                <S.GameSummary>
                    <p>
                        {game.info}
                    </p>
                </S.GameSummary>
                : ''}
            <S.GameInfoRow>
                {game.previousPrice ?
                    <S.PreviousPrice>{currencyFormat.format(game.previousPrice)}</S.PreviousPrice>
                    : <span></span>
                }
                <S.MoreInfoBtn onClick={() => setDisplayGameSummary(!displayGameSummary)}>{displayGameSummary ? 'Hide info' : 'More info'}</S.MoreInfoBtn>
            </S.GameInfoRow>
            <S.GameBuyRow>
                <S.GamePrice>{currencyFormat.format(game.currentPrice)}</S.GamePrice>
                {renderCartButton()}
            </S.GameBuyRow>
        </S.GameCard>
    )
}

export default GameCard