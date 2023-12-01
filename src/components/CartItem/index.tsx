import { useDispatch } from 'react-redux'
import { Game } from '../../App'
import { add } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
    game: Game
}

const CartItem = ({ game }: Props) => {

    const dispatch = useDispatch()

    return (
        <S.GameList>
            <S.GameThumb src={game.thumbnail} alt={game.title} />
            <S.GameInfo>
                <div>
                    <S.GameCartTitle>{game.title}</S.GameCartTitle>
                    {game.previousPrice ? <S.PreviousPriceCart>$ {game.previousPrice}</S.PreviousPriceCart> : ''}
                    <S.CurrentPriceCart>Price: $ {game.currentPrice}</S.CurrentPriceCart>
                </div>
                <S.RemoveItemButton onClick={() => dispatch(add(game))}>Remove from cart</S.RemoveItemButton>
            </S.GameInfo>
        </S.GameList>
    )
}

export default CartItem