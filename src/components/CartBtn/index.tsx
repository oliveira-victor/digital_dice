import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

import * as S from './styles'

import lightThemeCart from '../../assets/cart.svg'
import darkThemeCart from '../../assets/cart-white.svg'

type Props = {
    switchTheme: () => void
    themeIsDark: boolean
}

const CartBtn = (props: Props) => {

    const items = useSelector((state: RootReducer) => state.cart.items)

    return (
        <S.CartIcon>
            <img src={props.themeIsDark ? darkThemeCart : lightThemeCart} alt="Shopping cart icon" title={items.length > 1 ? `Cart: ${items.length} items` : `Cart: ${items.length} item`} />
            {items.length ?
                <S.CartNotification>{items.length}</S.CartNotification>
                : ''}
        </S.CartIcon>
    )
}

export default CartBtn