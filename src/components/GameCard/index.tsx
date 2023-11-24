import { useDispatch } from 'react-redux'
import { Game } from '../../App'
import { add } from '../../store/reducers/cart'
import { revealMsg } from '../../store/reducers/reveal'
import { useState } from 'react'

import * as S from './styles'

type Props = {
    game: Game
}

const GameCard = ({ game }: Props) => {
    const dispatch = useDispatch()

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

    return (
        <S.GameCard>
            <S.CardImage src={game.thumbnail} alt={game.title} />
            <S.GameTitle>{game.title}</S.GameTitle>
            <S.GenreList>
                {game.genre.map((gen) => (
                    <S.GenreButton key={gen}>{game.genre}</S.GenreButton>
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
                {itemAdded ?
                    <S.removeItemBtn onClick={handleCartAction} type='button'>Remove</S.removeItemBtn>
                    :
                    <S.BuyBtn onClick={handleCartAction} type='button'>Add to cart</S.BuyBtn>
                }

            </S.GameBuyRow>
        </S.GameCard>
    )
}

export default GameCard