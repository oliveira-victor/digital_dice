import { useDispatch, useSelector } from 'react-redux'
import { Game } from '../../App'
import { add } from '../../store/reducers/cart'
import { revealMsg } from '../../store/reducers/reveal'
import { useState } from 'react'

import * as S from './styles'
import { RootReducer } from '../../store'

type Props = {
    game: Game
}

const GameCard = ({ game }: Props) => {
    const dispatch = useDispatch()

    const items = useSelector((state: RootReducer) => state.cart.items)

    const [itemAdded, setItemAdded] = useState(false)

    function handleCartAction() {
        dispatch(add(game))
        setItemAdded(!itemAdded)
        
        if (itemAdded === false) {
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
            <S.CardImage src={game.thumbnail} alt={game.title} />
            <S.GameTitle>{game.title}</S.GameTitle>
            <S.GenreList>
                {game.genre.map((item, index) => (
                    <S.GenreButton key={index}>{item}</S.GenreButton>
                ))}
            </S.GenreList>
            <S.GameInfoRow>
                {game.previousPrice ?
                    <S.PreviousPrice>$: {game.previousPrice}</S.PreviousPrice>
                    : <span></span>
                }
                <S.MoreInfoBtn>More info</S.MoreInfoBtn>
            </S.GameInfoRow>
            <S.GameBuyRow>
                <S.GamePrice>$: {game.currentPrince}</S.GamePrice>
                {renderCartButton()}
            </S.GameBuyRow>
        </S.GameCard>
    )
}

export default GameCard