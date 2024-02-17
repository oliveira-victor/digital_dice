import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { RootReducer } from '../../store'

import * as S from './styles'

import digitalDiceA from '../../assets/images/digitalDice_a.svg'
import digitalDiceB from '../../assets/images/digitalDice_b.svg'
import lightThemeCart from '../../assets/images/cart.svg'
import darkThemeCart from '../../assets/images/cart-white.svg'
import moonIcon from '../../assets/images/moon-icon.svg'
import sunIcon from '../../assets/images/sun-icon.svg'

type Props = {
    switchTheme: () => void
    themeIsDark: boolean
}

const Header = (props: Props) => {

    const items = useSelector((state: RootReducer) => state.cart.items)

    return (
        <S.Header>
            <NavLink to="/">
                <h1>
                    <S.Title src={props.themeIsDark ? digitalDiceB : digitalDiceA} alt="Digital Dice logo" />
                </h1>
            </NavLink>
            <S.Menu>
                <S.MenuList>
                    <NavLink to="/">
                        <S.MenuOption>Games</S.MenuOption>
                    </NavLink>
                    <NavLink to="/company">
                        <S.MenuOption>The company</S.MenuOption>
                    </NavLink>
                    <NavLink to="/login">
                        <S.MenuOption>Login</S.MenuOption>
                    </NavLink>
                </S.MenuList>
                <NavLink to="/cart">
                    <S.CartIcon>
                        <img src={props.themeIsDark ? darkThemeCart : lightThemeCart} alt="Shopping cart icon" title={items.length > 1 ? `Cart: ${items.length} items` : `Cart: ${items.length} item`} />
                        {items.length ?
                            <S.CartNotification>{items.length}</S.CartNotification>
                            : ''}
                    </S.CartIcon>
                </NavLink>
                <S.themeIcon src={props.themeIsDark ? sunIcon : moonIcon} alt="Dark theme moon icon" onClick={props.switchTheme} title="Change theme" />
            </S.Menu>
        </S.Header>
    )
}

export default Header