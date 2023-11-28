import { NavLink } from 'react-router-dom'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

import * as S from './styles'

import tempImg from '../../assets/moon-icon.svg'
import lightThemeCart from '../../assets/cart.svg'

const PhoneMenu = () => {

    const items = useSelector((state: RootReducer) => state.cart.items)

    return (
        <S.MenuBar>
            <nav>
                <S.PhoneMenuList>
                    <NavLink to="/login">
                        <S.PhoneMenuButton>
                            <S.BtnIcon src={tempImg} alt="" />
                            <span>Login</span>
                        </S.PhoneMenuButton>
                    </NavLink>
                    <NavLink to="/">
                        <S.PhoneMenuButton>
                            <S.BtnIcon src={tempImg} alt="" />
                            <span>Games</span>
                        </S.PhoneMenuButton>
                    </NavLink>
                    <NavLink to="/company">
                        <S.PhoneMenuButton>
                            <S.BtnIcon src={tempImg} alt="" />
                            <span>About</span>
                        </S.PhoneMenuButton>
                    </NavLink>
                    <NavLink to="/cart">
                        <S.CartBtnContainer>
                        <S.CartIcon>
                        <img src={lightThemeCart} alt="Shopping cart icon" title={items.length > 1 ? `Cart: ${items.length} items` : `Cart: ${items.length} item`} />
                        {items.length ?
                            <S.CartNotification>{items.length}</S.CartNotification>
                            : ''}
                    </S.CartIcon>
                        </S.CartBtnContainer>
                    </NavLink>
                </S.PhoneMenuList>
            </nav>
        </S.MenuBar>
    )
}

export default PhoneMenu